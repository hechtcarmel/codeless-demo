// Interactive features for planet pages
document.addEventListener('DOMContentLoaded', () => {
    // Image loading handling
    const planetImages = document.querySelectorAll('.planet-hero img');
    planetImages.forEach(img => {
        img.classList.add('loading');
        
        img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.classList.add('error');
            console.error(`Failed to load image: ${img.src}`);
        });
    });

    // Feature list hover effect
    const featureItems = document.querySelectorAll('.features li');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // Price animation on scroll
    const priceElement = document.querySelector('.price');
    if (priceElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('price-visible');
                }
            });
        });
        observer.observe(priceElement);
    }

    // Form field focus effects
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });

    // Purchase button hover effect
    const purchaseButton = document.querySelector('.cta-button');
    if (purchaseButton) {
        purchaseButton.addEventListener('mouseenter', () => {
            purchaseButton.classList.add('button-hover');
        });
        
        purchaseButton.addEventListener('mouseleave', () => {
            purchaseButton.classList.remove('button-hover');
        });
    }

    // Add parallax effect to planet hero
    const hero = document.querySelector('.planet-hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
}); 