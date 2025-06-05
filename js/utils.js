import { FORM_VALIDATION } from './constants.js';

export const isValidEmail = email => {
    return FORM_VALIDATION.email.pattern.test(email);
};

export const isValidPhone = phone => {
    return FORM_VALIDATION.phone.pattern.test(phone);
};

export const isValidName = name => {
    return name.length >= FORM_VALIDATION.name.minLength;
};

export const showMessage = (message, type, container) => {
    const messageElement = document.createElement('div');
    messageElement.className = `${type}-message`;
    messageElement.textContent = message;

    container.insertBefore(messageElement, container.firstChild);

    setTimeout(() => {
        messageElement.remove();
    }, 5000);
};

export const handleFormSubmit = (event, planetName) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!isValidEmail(data.email)) {
        showMessage(FORM_VALIDATION.email.message, 'error', form);
        return;
    }

    showMessage('Thank you for your interest! We will contact you shortly.', 'success', form);
    form.reset();
};
