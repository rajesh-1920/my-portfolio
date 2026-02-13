/**
 * Navigation Module
 * Handles smooth scrolling, active link highlighting, and mobile menu
 */

const Navigation = (() => {
    const navLinks = document.querySelectorAll('.nav-link[data-scroll]');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    /**
     * Initialize navigation functionality
     */
    const init = () => {
        // Smooth scroll for all nav links
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
        
        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }
        
        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Update active link on scroll
        window.addEventListener('scroll', updateActiveLink);
        
        // Initial active link update
        updateActiveLink();
    };
    
    /**
     * Handle navigation link click with smooth scroll
     */
    const handleNavClick = (e) => {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate offset for sticky navbar
            const navBar = document.querySelector('.navbar');
            const offset = navBar ? navBar.offsetHeight : 0;
            
            const targetPosition = targetElement.offsetTop - offset;
            
            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    /**
     * Update active link based on scroll position
     */
    const updateActiveLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navBar = document.querySelector('.navbar');
        const offset = navBar ? navBar.offsetHeight + 100 : 100;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    /**
     * Toggle mobile menu
     */
    const toggleMobileMenu = () => {
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('no-scroll');
        }
    };
    
    /**
     * Close mobile menu
     */
    const closeMobileMenu = () => {
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    };
    
    /**
     * Close mobile menu when clicking outside
     */
    const handleOutsideClick = (e) => {
        if (navMenu && !navMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target) && 
            navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    };
    
    /**
     * Debounce scroll event
     */
    const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };
    
    // Add outside click listener
    if (mobileMenuBtn) {
        document.addEventListener('click', handleOutsideClick);
    }
    
    // Debounce updateActiveLink
    window.addEventListener('scroll', debounce(updateActiveLink, 100));
    
    return {
        init,
        closeMobileMenu,
        toggleMobileMenu
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Navigation.init);
} else {
    Navigation.init();
}
