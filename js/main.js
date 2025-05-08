// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
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

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all planet cards
    document.querySelectorAll('.planet-card').forEach(card => {
        observer.observe(card);
    });

    // Event listeners for new buttons on index.html
    const rocketButton = document.getElementById('rocketButton');
    if (rocketButton) {
        rocketButton.addEventListener('click', () => {
            alert('Rocket button clicked! Zooming to more details...');
        });
    }

    const learnMoreVision = document.getElementById('learnMoreVision');
    if (learnMoreVision) {
        learnMoreVision.addEventListener('click', () => {
            alert('Our Vision button clicked! Learn about our mission to expand humanity\'s reach.');
        });
    }

    const contactUsHebrew = document.getElementById('contactUsHebrew');
    if (contactUsHebrew) {
        contactUsHebrew.addEventListener('click', () => {
            alert('כפתור "צור קשר" נלחץ!');
        });
    }

    // The "View All Planets" button is an anchor, so it doesn't need a JS handler for basic navigation.

    // Favorite buttons on planet cards
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent the click from bubbling up to the card's <a> tag if the button is inside it.
            e.stopPropagation(); 
            e.preventDefault(); // Also prevent default if it's somehow wrapped in an anchor, though it shouldn't be.

            button.classList.toggle('active');
            const planetName = button.closest('.planet-card').querySelector('h3').textContent;
            if (button.classList.contains('active')) {
                alert(`${planetName} added to favorites!`);
                // Here you would typically add logic to actually save the favorite state
                // For example, using localStorage or sending data to a server.
            } else {
                alert(`${planetName} removed from favorites!`);
                // Logic to remove favorite state
            }
        });
    });

    // Joke button functionality
    const tellJokeButton = document.getElementById('tellJokeButton');
    if (tellJokeButton) {
        const jokeTitleSpan = tellJokeButton.querySelector('.joke-card-title');
        const jokeSubtitleSpan = tellJokeButton.querySelector('.joke-card-subtitle');
        const originalSubtitleText = jokeSubtitleSpan ? jokeSubtitleSpan.textContent : 'Need a laugh? Click here.';

        tellJokeButton.addEventListener('click', async () => {
            try {
                if (jokeSubtitleSpan) jokeSubtitleSpan.textContent = 'Fetching joke...';
                else if (jokeTitleSpan) jokeTitleSpan.textContent = 'Fetching...';
                
                tellJokeButton.disabled = true;

                const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.error) {
                    alert('Sorry, couldn\'t fetch a joke at the moment. Please try again later.');
                } else {
                    alert(data.joke); 
                }
            } catch (error) {
                console.error('Error fetching joke:', error);
                alert('Oops! Something went wrong while fetching the joke.');
            } finally {
                if (jokeSubtitleSpan) jokeSubtitleSpan.textContent = originalSubtitleText;
                else if (jokeTitleSpan) jokeTitleSpan.textContent = 'Tell me a Joke!';

                tellJokeButton.disabled = false;
            }
        });
    }
}); 