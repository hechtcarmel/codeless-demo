import { FORM_VALIDATION, PLANET_DATA } from './constants.js';

const urlParams = new URLSearchParams(window.location.search);
const planetId = urlParams.get('planet') || 'mars'; // Default to Mars if no planet specified

const planet = PLANET_DATA[planetId];

document.title = `${planet.name} - Planet Details`;

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

const successModal = document.getElementById('successModal');
const modalPlanetName = document.getElementById('modalPlanetName');
const modalEmail = document.getElementById('modalEmail');
const modalClose = document.querySelector('.modal-close');

const currentPlanetLink = document.querySelector(`a[href="planet.html?planet=${planetId}"]`);
if (currentPlanetLink) {
    currentPlanetLink.classList.add('active');
}

planetName.textContent = planet.name;
planetPrice.textContent = planet.price;
planetPriceLabel.innerHTML =
    '<span style="font-weight: bold; text-decoration: underline;">Price:</span>' + ' ' + planet.price;
planetSizeLabel.innerHTML =
    '<span style="font-weight: bold; text-decoration: underline;">Size:</span>' + ' ' + planet.size;
planetDistanceLabel.innerHTML =
    '<span style="font-weight: bold; text-decoration: underline;">Distance from Earth:</span>' + ' ' + planet.distance;
planetDescription.innerHTML = planet.description;

planet.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    planetFeatures.appendChild(li);
});

planetImage.addEventListener('load', () => {
    planetImage.classList.remove('loading');
    planetImage.classList.add('loaded');
});

planetImage.addEventListener('error', () => {
    planetImage.classList.remove('loading');
    planetImage.classList.add('error');
});

planetImage.src = planet.imageUrl;

function showModal(planetName, email) {
    modalPlanetName.textContent = planetName;
    modalEmail.textContent = email;
    successModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

modalClose.addEventListener('click', hideModal);

successModal.addEventListener('click', e => {
    if (e.target === successModal) {
        hideModal();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && successModal.style.display === 'flex') {
        hideModal();
    }
});

purchaseForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (!FORM_VALIDATION.email.pattern.test(email)) {
        alert(FORM_VALIDATION.email.message);
        return;
    }

    showModal(planet.name, email);

    purchaseForm.reset();
});

viewGalleryBtn.addEventListener('click', () => {
    window._tfa = window._tfa || [];
    window._tfa.push({
        notify: 'event',
        name: 'VIEW_GALLERY',
        id: 1056846,
        revenue: 20,
        currency: '$',
    });
    alert('Tracking event sent! Gallery feature coming soon.');
});

scheduleTourBtn.addEventListener('click', () => {
    alert('Virtual tour scheduling system is under development. Please check back later!');
});

const telescopeButton = document.getElementById('telescopeButton');
if (telescopeButton) {
    telescopeButton.addEventListener('click', () => {
        alert('Telescope button clicked! Enhancing gallery view...');
    });
}

const bookTourHebrew = document.getElementById('bookTourHebrew');
if (bookTourHebrew) {
    bookTourHebrew.addEventListener('click', () => {
        alert('כפתור "הזמן סיור" נלחץ!');
    });
}

const requestInfoFormAction = document.getElementById('requestInfoFormAction');
if (requestInfoFormAction) {
    requestInfoFormAction.addEventListener('click', () => {
        alert('Request Detailed Info (form area) button clicked! We will send you more details shortly.');
    });
}

const requestInfoDescriptionBlock = document.getElementById('requestInfoDescriptionBlock');
if (requestInfoDescriptionBlock) {
    requestInfoDescriptionBlock.addEventListener('click', () => {
        alert('Request Detailed Info (description area) button clicked! Information packet is on its way.');
    });
}
