import { PLANET_DATA } from './constants.js';
import { handleFormSubmit } from './utils.js';

// Get current planet from URL
const currentPlanet = window.location.pathname.split('/').pop().replace('.html', '');
const planetData = PLANET_DATA[currentPlanet];

// Form validation and submission handling
document.addEventListener('DOMContentLoaded', () => {
    // Image loading handling
    const planetImages = document.querySelectorAll('.planet-hero img');
    planetImages.forEach(img => {
        // Set initial loading state
        img.classList.add('loading');
        
        // If image is already loaded (from cache), handle it immediately
        if (img.complete) {
            img.classList.remove('loading');
            img.classList.add('loaded');
        } else {
            // Handle successful load
            img.addEventListener('load', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            }, { once: true });
            
            // Handle load error
            img.addEventListener('error', () => {
                img.classList.remove('loading');
                img.classList.add('error');
                console.error(`Failed to load image: ${img.src}`);
            }, { once: true });
        }
    });

    // Form handling
    const purchaseForm = document.getElementById('purchaseForm');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(purchaseForm);
            const purchaseData = {
                name: formData.get('name'),
                email: formData.get('email'),
                payment: formData.get('payment'),
                planet: document.querySelector('.planet-hero h2').textContent,
                price: document.querySelector('.price').textContent
            };
            
            // Validate form data
            if (!validateForm(purchaseData)) {
                return;
            }
            
            // Process purchase (simulated)
            processPurchase(purchaseData);
        });
    }

    if (planetData) {
        // Add hover effect to features
        const features = document.querySelectorAll('.features li');
        features.forEach(feature => {
            feature.addEventListener('mouseenter', () => {
                feature.style.transform = 'translateX(10px)';
                feature.style.transition = 'transform 0.3s ease';
            });
            
            feature.addEventListener('mouseleave', () => {
                feature.style.transform = 'translateX(0)';
            });
        });
    }
});

/**
 * Validates the purchase form data
 * @param {Object} data - The form data to validate
 * @returns {boolean} - Whether the form data is valid
 */
function validateForm(data) {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    return true;
}

/**
 * Processes the purchase (simulated)
 * @param {Object} data - The validated purchase data
 */
function processPurchase(data) {
    // Show loading state
    const submitButton = document.querySelector('.cta-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showSuccess(`Thank you for your interest in purchasing ${data.planet}! We will contact you at ${data.email} to complete the transaction.`);
        
        // Reset form
        document.getElementById('purchaseForm').reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

/**
 * Shows an error message to the user
 * @param {string} message - The error message to display
 */
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.getElementById('purchaseForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

/**
 * Shows a success message to the user
 * @param {string} message - The success message to display
 */
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const form = document.getElementById('purchaseForm');
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
} 