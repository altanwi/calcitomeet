const welcomeMessage = document.querySelector("#welcome h1");
let messageText = welcomeMessage.innerText;
welcomeMessage.innerText = "";

let index = 0;
function typeEffect() {
    if (index < messageText.length) {
        welcomeMessage.innerText += messageText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
}
setInterval(showNextImage, 2000);

const messages = document.querySelectorAll('.hidden-message');
messages.forEach((msg, i) => {
    setTimeout(() => msg.style.display = "block", i * 3000);
});

const targetDate = new Date("2024-12-31").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        timerElement.innerHTML = "The time has come!";
    }
}

setInterval(updateCountdown, 1000);
