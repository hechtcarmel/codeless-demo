import { PLANET_DATA, ANIMATION_TIMING } from './constants.js';
import { handleFormSubmit } from './utils.js';

// Get planet data
const planetData = PLANET_DATA.mars;

// Image loading
const heroImage = document.querySelector('.planet-hero img');
if (heroImage) {
    heroImage.src = planetData.imageUrl;
    heroImage.onload = () => {
        heroImage.classList.add('loaded');
    };
}

// Form handling
const purchaseForm = document.querySelector('.purchase-form');
if (purchaseForm) {
    purchaseForm.addEventListener('submit', (event) => handleFormSubmit(event, planetData.name));
}

// Add hover effect to features
const features = document.querySelectorAll('.features li');
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'translateX(10px)';
    });
    
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'translateX(0)';
    });
}); 