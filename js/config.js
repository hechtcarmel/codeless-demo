// Base path configuration
const BASE_PATH = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? '' // Empty for local development
    : '/codeless-site'; // For GitHub Pages

export { BASE_PATH }; 