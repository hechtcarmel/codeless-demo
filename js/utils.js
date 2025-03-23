import { FORM_VALIDATION } from './constants.js';

/**
 * Validates an email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
    return FORM_VALIDATION.email.pattern.test(email);
};

/**
 * Validates a phone number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
    return FORM_VALIDATION.phone.pattern.test(phone);
};

/**
 * Validates a name
 * @param {string} name - The name to validate
 * @returns {boolean} - Whether the name is valid
 */
export const isValidName = (name) => {
    return name.length >= FORM_VALIDATION.name.minLength;
};

/**
 * Shows a message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message ('error' or 'success')
 * @param {HTMLElement} container - The container to show the message in
 */
export const showMessage = (message, type, container) => {
    const messageElement = document.createElement('div');
    messageElement.className = `${type}-message`;
    messageElement.textContent = message;
    
    container.insertBefore(messageElement, container.firstChild);
    
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
};

/**
 * Handles form submission
 * @param {Event} event - The form submission event
 * @param {string} planetName - The name of the planet being purchased
 */
export const handleFormSubmit = (event, planetName) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate email
    if (!isValidEmail(data.email)) {
        showMessage(FORM_VALIDATION.email.message, 'error', form);
        return;
    }
    
    // Show success message
    showMessage('Thank you for your interest! We will contact you shortly.', 'success', form);
    form.reset();
}; 