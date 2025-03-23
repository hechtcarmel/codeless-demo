// Get the base path for the current environment
function getBasePath() {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? '' // Empty for local development
        : '/codeless-site'; // For GitHub Pages
}

// Update all image sources with the correct base path
function updateImagePaths() {
    const basePath = getBasePath();
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc.startsWith('../')) {
            // For pages in subdirectories
            img.src = `${basePath}/${currentSrc.replace('../', '')}`;
        } else if (!currentSrc.startsWith('/')) {
            // For root level pages
            img.src = `${basePath}/${currentSrc}`;
        }
    });
}

// Update all link hrefs with the correct base path
function updateLinkPaths() {
    const basePath = getBasePath();
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        const currentHref = link.getAttribute('href');
        if (currentHref.startsWith('../')) {
            // For pages in subdirectories
            link.href = `${basePath}/${currentHref.replace('../', '')}`;
        } else if (!currentHref.startsWith('/')) {
            // For root level pages
            link.href = `${basePath}/${currentHref}`;
        }
    });
}

// Initialize path updates
document.addEventListener('DOMContentLoaded', () => {
    updateImagePaths();
    updateLinkPaths();
});

export { getBasePath, updateImagePaths, updateLinkPaths }; 