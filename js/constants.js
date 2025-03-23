// Planet data configuration
const PLANET_DATA = {
    mars: {
        name: 'Mars',
        price: '$10.0 Billion',
        imageUrl: 'images/mars.jpg',
        size: '6,792 km diameter',
        distance: '225 million km from Earth',
        description: 'The best team at Taboola. <br/> Mars, the Red Planet, offers a unique opportunity for interplanetary real estate. With its distinctive red surface and potential for future colonization, Mars represents the next frontier in space exploration.',
        features: [
            'Two moons: Phobos and Deimos',
            'Thin atmosphere primarily composed of CO2',
            'Potential for future terraforming',
            'Olympus Mons, the largest volcano in the solar system',
            'Valles Marineris, a vast canyon system'
        ]
    },
    jupiter: {
        name: 'Jupiter',
        price: '$2.5 Billion',
        imageUrl: 'images/jupiter.jpg',
        size: '139,820 km diameter',
        distance: '778.5 million km from Earth',
        description: 'Jupiter, the largest planet in our solar system, is a gas giant with a stunning array of atmospheric features. This massive planet offers a unique opportunity to own a piece of cosmic history.',
        features: [
            'The Great Red Spot storm',
            '79 known moons',
            'Strong magnetic field',
            'Rapid rotation (10 hours)',
            'Complex ring system'
        ]
    },
    saturn: {
        name: 'Saturn',
        price: '$3.8 Billion',
        imageUrl: 'images/saturn.jpg',
        size: '116,460 km diameter',
        distance: '1.4 billion km from Earth',
        description: 'Saturn, the jewel of our solar system, is famous for its spectacular ring system. This gas giant offers a unique opportunity to own one of the most visually stunning planets in our solar system.',
        features: [
            'Spectacular ring system',
            '82 known moons',
            'Low density (could float in water)',
            'Hexagonal storm at north pole',
            'Complex atmospheric patterns'
        ]
    }
};

// Form validation constants
const FORM_VALIDATION = {
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        pattern: /^\+?[\d\s-]{10,}$/,
        message: 'Please enter a valid phone number'
    },
    name: {
        minLength: 2,
        message: 'Name must be at least 2 characters long'
    }
};

// Export constants
export { PLANET_DATA, FORM_VALIDATION }; 