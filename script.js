// JavaScript for Walk Invitation and Other Interactions
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const imageContainer = document.getElementById('image-container');
    const walkImage = document.getElementById('walk-image');

    // Hide the image container initially
    imageContainer.classList.add('hidden');

    // Event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        walkImage.src = 'images/walk.jpg'; // Replace with your walk image path
        walkImage.alt = 'Let’s go for a walk!';
        imageContainer.classList.remove('hidden');
        imageContainer.classList.add('fade-in'); // Optional animation class

        // Show hidden messages
        document.querySelectorAll('.hidden-message').forEach((msg, index) => {
            setTimeout(() => {
                msg.style.display = 'block';
                msg.style.opacity = 1;
            }, index * 500); // Stagger messages
        });
    });

    // Event listener for "No" button
    noButton.addEventListener('click', () => {
        walkImage.src = 'images/no-walk.jpg'; // Replace with your no walk image path
        walkImage.alt = 'Maybe next time!';
        imageContainer.classList.remove('hidden');
        imageContainer.classList.add('fade-in'); // Optional animation class
    });
});
