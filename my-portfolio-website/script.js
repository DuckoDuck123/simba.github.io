--- START OF FILE script.js ---
// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the hero section
const heroSection = document.getElementById('hero-section');

// Generate two random colors for the gradient
const color1 = getRandomColor();
const color2 = getRandomColor();

// Set the hero section's background style
if (heroSection) {
    heroSection.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

 // Get the about button and apply the black theme
const aboutButton = document.querySelector('.about-button');
if (aboutButton) {
   aboutButton.style.backgroundColor = '#000'; // Black background
   aboutButton.style.color = '#fff';       // White text
 }
--- END OF FILE script.js ---