import { PLANET_DATA, FORM_VALIDATION } from './constants.js';

// Get URL parameters to determine which planet to show
const urlParams = new URLSearchParams(window.location.search);
const planetId = urlParams.get('planet') || 'mars'; // Default to Mars if no planet specified

// Get the planet data
const planet = PLANET_DATA[planetId];

// Update the page title
document.title = `${planet.name} - Planet Details`;

// Get DOM elements
const planetImage = document.getElementById('planetImage');
const planetName = document.getElementById('planetName');
const planetPrice = document.getElementById('planetPrice');
const planetPriceLabel = document.getElementById('planetPriceLabel');
const planetSizeLabel = document.getElementById('planetSizeLabel');
const planetDistanceLabel = document.getElementById('planetDistanceLabel');
const planetDescription = document.getElementById('planetDescription');
const planetFeatures = document.getElementById('planetFeatures');
const purchaseForm = document.getElementById('purchaseForm');
const viewGalleryBtn = document.getElementById('viewGalleryBtn');
const scheduleTourBtn = document.getElementById('scheduleTourBtn');

// Get modal elements
const successModal = document.getElementById('successModal');
const modalPlanetName = document.getElementById('modalPlanetName');
const modalEmail = document.getElementById('modalEmail');
const modalClose = document.querySelector('.modal-close');

// Highlight current planet in navigation
const currentPlanetLink = document.querySelector(`a[href="planet.html?planet=${planetId}"]`);
if (currentPlanetLink) {
    currentPlanetLink.classList.add('active');
}

// Populate the HTML with planet data
planetName.textContent = planet.name;
planetPrice.textContent = planet.price;
planetPriceLabel.innerHTML = '<span style="font-weight: bold; text-decoration: underline;">Price:</span>' + ' ' + planet.price;
planetSizeLabel.innerHTML = '<span style="font-weight: bold; text-decoration: underline;">Size:</span>' + ' ' + planet.size;
planetDistanceLabel.innerHTML = '<span style="font-weight: bold; text-decoration: underline;">Distance from Earth:</span>' + ' ' + planet.distance;
planetDescription.innerHTML = planet.description;

// Create and append features list
planet.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    planetFeatures.appendChild(li);
});

// Handle image loading
planetImage.addEventListener('load', () => {
    planetImage.classList.remove('loading');
    planetImage.classList.add('loaded');
});

planetImage.addEventListener('error', () => {
    planetImage.classList.remove('loading');
    planetImage.classList.add('error');
});

planetImage.src = planet.imageUrl;

// Show modal function
function showModal(planetName, email) {
    modalPlanetName.textContent = planetName;
    modalEmail.textContent = email;
    successModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Hide modal function
function hideModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking the close button
modalClose.addEventListener('click', hideModal);

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        hideModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.style.display === 'flex') {
        hideModal();
    }
});

// Form validation and submission handling
purchaseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;

    // Validate email
    if (!FORM_VALIDATION.email.pattern.test(email)) {
        alert(FORM_VALIDATION.email.message);
        return;
    }

    // Show success modal
    showModal(planet.name, email);
    
    // Reset form
    purchaseForm.reset();
});

// Add button click handlers
viewGalleryBtn.addEventListener('click', () => {
    alert('Photo gallery feature coming soon! In the meantime, enjoy our main image.');
});

scheduleTourBtn.addEventListener('click', () => {
    alert('Virtual tour scheduling system is under development. Please check back later!');
}); 