// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the hero background with a new gradient
function updateHeroBackground() {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    }
}

// Initial call
updateHeroBackground();

// Set interval to update the background
setInterval(updateHeroBackground, 3000);

// --- Donation Modal Functions ---

// Get modal and image elements
const modal = document.getElementById('qrModal');
const modalImage = document.getElementById('modalImage');
const closeWechat = document.getElementById('closeWechat');

// Function to show the WeChat QR code
function showWechatQR() {
    if (modal && modalImage) {
        modalImage.src = "wechat.jpg"; // Set WeChat QR code image source
        modal.style.display = "flex";      // Show the modal
    }
}

// Function to show the Alipay QR code
function showAlipayQR() {
    if (modal && modalImage) {
        modalImage.src = "alipay.jpg"; // Set Alipay QR code image source
        modal.style.display = "flex";      // Show the modal
    }
}

// Function to close the modal
function closeModal() {
    if (modal) {
      modal.style.display = "none";
    }
}


// Close the modal when the close button is clicked
if (closeWechat) {
    closeWechat.onclick = closeModal;
}


// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

 // Get the about button and apply the black theme
 const aboutButton = document.querySelector('.about-button');
if (aboutButton) {
   aboutButton.style.backgroundColor = '#000'; // Black background
   aboutButton.style.color = '#fff';       // White text
 }