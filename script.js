// JavaScript for Walk Invitation and Other Interactions
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const imageContainer = document.getElementById('image-container');
    const walkImage = document.getElementById('walk-image');
    const countdownTimer = document.getElementById('countdown-timer');
    let countdownTime = 10; // Set countdown time in seconds

    // Hide the image container initially
    imageContainer.classList.add('hidden');

    // Countdown Timer Functionality
    const countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            countdownTimer.textContent = "Time's up! You can decide now.";
        } else {
            countdownTimer.textContent = `Time left: ${countdownTime} seconds`;
            countdownTime--;
        }
    }, 1000);

    // Function to shake the button
    function shake(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 1000);
    }

    // Event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        walkImage.src = 'https://github.com/altanwi/calcitomeet/blob/main/WhatsApp%20Image%202024-10-26%20at%2016.23.16.jpeg?raw=true'; // Set your image path
        walkImage.alt = 'Let’s go for a walk!';
        imageContainer.classList.remove('hidden');
        imageContainer.classList.add('fade-in'); // Optional animation class

        // Show hidden messages with staggered entrance
        document.querySelectorAll('.hidden-message').forEach((msg, index) => {
            setTimeout(() => {
                msg.classList.add('show');
                msg.style.opacity = 1;
            }, index * 500); // Stagger messages
        });
    });

    // Event listener for "No" button
    noButton.addEventListener('click', () => {
        walkImage.src = 'https://example.com/no-walk.jpg'; // Replace with your "no" image path
        walkImage.alt = 'Maybe next time!';
        imageContainer.classList.remove('hidden');
        imageContainer.classList.add('fade-in'); // Optional animation class
    });

    // Add shake effect on button hover
    yesButton.addEventListener('mouseover', () => shake(yesButton));
    noButton.addEventListener('mouseover', () => shake(noButton));

    // Animate sections on scroll into view
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
