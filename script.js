let yesButtonScale = 1; // Initial scale of the "Yes" button

function yesClicked() {
    // Trigger celebration (floating images)
    createFloatingImages();

    // Redirect to the new page (letter.html) after the celebration
    setTimeout(function() {
        window.location.href = "letter.html"; // Navigate to the letter page
    }, 7000); // Wait for the animation to finish before redirecting
}

function noClicked() {
    // Make the "Yes" button grow bigger every time "No" is clicked
    const yesButton = document.querySelector('button:nth-child(1)');
    yesButtonScale += 0.1;  // Increase the scale by 0.1 each time
    yesButton.style.transform = `scale(${yesButtonScale})`; // Apply the new scale
}

function createFloatingImages() {
    const imgSources = ['img/1.png', 'img/2.png', 'img/3.png'];
    const container = document.body;

    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = imgSources[i];
        img.classList.add('floating-image');
        img.style.left = `${Math.random() * 100}%`; // Random horizontal position
        container.appendChild(img);

        // Set a timeout to remove the image after animation
        setTimeout(() => {
            img.remove();
        }, 7000); // Duration of the animation
    }
}
