// Property Data
const properties = {
    1: {
        title: "Modern Villa",
        location: "Beverly Hills, CA",
        price: "$12,500,000",
        bedrooms: 5,
        bathrooms: 6,
        area: "8,500",
        description: "This stunning modern villa offers unparalleled luxury living in the heart of Beverly Hills. Featuring floor-to-ceiling windows, an infinity pool, and panoramic city views, this property exemplifies contemporary elegance. The open-concept design seamlessly blends indoor and outdoor living spaces, perfect for entertaining.",
        features: [
            "Infinity pool with city views",
            "Smart home automation",
            "Gourmet chef's kitchen",
            "Home theater",
            "Wine cellar",
            "Spa and wellness center",
            "Private gym",
            "Three-car garage"
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80"
        ]
    },
    2: {
        title: "Coastal Retreat",
        location: "Malibu, CA",
        price: "$18,900,000",
        bedrooms: 6,
        bathrooms: 7,
        area: "10,200",
        description: "Experience breathtaking ocean views from this magnificent coastal estate. Direct beach access, expansive decks, and seamless indoor-outdoor living make this the ultimate seaside sanctuary. Every detail has been carefully curated to maximize the stunning natural surroundings.",
        features: [
            "Direct beach access",
            "Ocean-view master suite",
            "Outdoor kitchen and dining",
            "Fire pit lounge area",
            "Guest house",
            "Meditation garden",
            "Private spa",
            "Sustainable design features"
        ],
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
            "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80"
        ]
    },
    3: {
        title: "Urban Penthouse",
        location: "Manhattan, NY",
        price: "$25,000,000",
        bedrooms: 4,
        bathrooms: 5,
        area: "6,800",
        description: "Soaring above Manhattan, this ultra-luxury penthouse offers 360-degree views of the iconic skyline. With soaring ceilings, a private terrace, and museum-quality finishes, this residence represents the pinnacle of urban sophistication and modern design.",
        features: [
            "360-degree skyline views",
            "Private rooftop terrace",
            "Floor-to-ceiling windows",
            "Italian marble throughout",
            "Custom millwork",
            "Concierge services",
            "Private elevator",
            "Temperature-controlled wine storage"
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80"
        ]
    },
    4: {
        title: "Mediterranean Estate",
        location: "Miami Beach, FL",
        price: "$15,750,000",
        bedrooms: 7,
        bathrooms: 8,
        area: "12,000",
        description: "This exquisite Mediterranean-style estate embodies timeless elegance and tropical luxury. Featuring lush gardens, a resort-style pool, and direct water access, this property offers a private oasis in the heart of Miami Beach. Perfect for grand entertaining and intimate family living.",
        features: [
            "Resort-style pool and spa",
            "Private dock",
            "Tropical landscaped gardens",
            "Outdoor summer kitchen",
            "Separate guest quarters",
            "Tennis court",
            "Koi pond",
            "Hurricane-resistant design"
        ],
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80"
        ]
    },
    5: {
        title: "Mountain Chalet",
        location: "Aspen, CO",
        price: "$22,500,000",
        bedrooms: 6,
        bathrooms: 7,
        area: "9,500",
        description: "Nestled in the pristine mountains of Aspen, this luxury chalet combines rustic charm with modern sophistication. Featuring exposed timber beams, stone fireplaces, and panoramic mountain views, this retreat offers year-round access to world-class skiing and outdoor adventures.",
        features: [
            "Ski-in/ski-out access",
            "Panoramic mountain views",
            "Great room with stone fireplace",
            "Heated outdoor pool and hot tub",
            "Home theater room",
            "Sauna and steam room",
            "Wine cellar",
            "Attached heated garage"
        ],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
        ]
    }
};

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
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

// Property Detail Page
if (window.location.pathname.includes('property-detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    if (propertyId && properties[propertyId]) {
        const property = properties[propertyId];
        let currentImageIndex = 0;

        // Populate property details
        document.getElementById('propertyTitle').textContent = property.title;
        document.getElementById('propertyLocation').textContent = property.location;
        document.getElementById('propertyPrice').textContent = property.price;
        document.getElementById('bedrooms').textContent = property.bedrooms;
        document.getElementById('bathrooms').textContent = property.bathrooms;
        document.getElementById('area').textContent = property.area;
        document.getElementById('propertyDescription').textContent = property.description;

        // Populate features
        const featuresList = document.getElementById('featuresList');
        property.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Set up gallery
        const mainImage = document.getElementById('mainImage');
        const thumbnailStrip = document.querySelector('.thumbnail-strip');

        // Load images
        property.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumbnail';
            if (index === 0) thumb.classList.add('active');
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${property.title} ${index + 1}`;
            
            thumb.appendChild(img);
            thumb.addEventListener('click', () => {
                currentImageIndex = index;
                updateMainImage();
            });
            
            thumbnailStrip.appendChild(thumb);
        });

        // Set initial image
        mainImage.src = property.images[0];
        mainImage.alt = property.title;

        // Gallery navigation
        function updateMainImage() {
            mainImage.src = property.images[currentImageIndex];
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentImageIndex);
            });

            // Scroll thumbnail into view
            const activeThumbnail = document.querySelectorAll('.thumbnail')[currentImageIndex];
            activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }

        document.querySelector('.gallery-nav.prev').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
            updateMainImage();
        });

        document.querySelector('.gallery-nav.next').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % property.images.length;
            updateMainImage();
        });

        // Touch swipe for gallery
        let touchStartX = 0;
        let touchEndX = 0;

        mainImage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        mainImage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next image
                currentImageIndex = (currentImageIndex + 1) % property.images.length;
                updateMainImage();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right - previous image
                currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
                updateMainImage();
            }
        }
    }
}

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}
