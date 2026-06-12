class Navbar {
    constructor() {
        this.btn = document.getElementById('mobile-menu-btn');
        this.closeBtn = document.getElementById('close-menu-btn');
        this.drawer = document.getElementById('mobile-drawer');
        this.overlay = document.getElementById('mobile-overlay');

        if (this.btn && this.closeBtn && this.drawer && this.overlay) {
            this.init();
        }
    }

    init() {
        // Bind methods to keep 'this' context
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        // Add event listeners
        this.btn.addEventListener('click', this.openMenu);
        this.closeBtn.addEventListener('click', this.closeMenu);
        this.overlay.addEventListener('click', this.closeMenu);
    }

    openMenu() {
        this.drawer.classList.remove('translate-x-full');
        this.overlay.classList.remove('hidden');
        // Slight delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            this.overlay.classList.remove('opacity-0');
        }, 10);
    }

    closeMenu() {
        this.drawer.classList.add('translate-x-full');
        this.overlay.classList.add('opacity-0');
        // Wait for transition to finish before hiding
        setTimeout(() => {
            this.overlay.classList.add('hidden');
        }, 300);
    }
}

class Slider {
    constructor(containerId, intervalMs = 3000) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        this.images = container.querySelectorAll('.slider-img');
        if (this.images.length === 0) return;
        
        this.currentIndex = 0;
        this.intervalMs = intervalMs;
        
        this.init();
    }

    init() {
        // Start the automated sliding
        setInterval(() => this.nextSlide(), this.intervalMs);
    }

    nextSlide() {
        const currentImg = this.images[this.currentIndex];
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        const nextImg = this.images[nextIndex];

        // Slide current image out to the left
        currentImg.classList.remove('translate-x-0');
        currentImg.classList.add('-translate-x-full');
        
        // Slide next image in from the right
        nextImg.classList.remove('translate-x-full', '-translate-x-full');
        nextImg.classList.add('translate-x-0');
        
        // Reset the outgoing image back to the right side invisibly after the transition completes
        setTimeout(() => {
            // Disable transition temporarily
            currentImg.style.transition = 'none';
            currentImg.classList.remove('-translate-x-full');
            currentImg.classList.add('translate-x-full');
            
            // Force browser reflow to apply the non-transitioned state immediately
            void currentImg.offsetWidth;
            
            // Restore CSS transition for its next appearance
            currentImg.style.transition = '';
        }, 1000); // 1000ms matches the duration-1000 class

        this.currentIndex = nextIndex;
    }
}

class MapController {
    constructor() {
        this.mapOverlay = document.getElementById('map-overlay');

        if (this.mapOverlay) {
            this.init();
        }
    }

    init() {
        // Map overlay click
        if (this.mapOverlay) {
            this.mapOverlay.addEventListener('click', () => {
                this.mapOverlay.style.opacity = '0';
                setTimeout(() => this.mapOverlay.style.pointerEvents = 'none', 300);
            });
        }
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
    new Slider('siak-slider', 3000); // 3000ms = 3 seconds
    new MapController();
});
