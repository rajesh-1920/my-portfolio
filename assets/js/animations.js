/**
 * Animations Module
 * Handles scroll reveal animations and typing effect
 */

const Animations = (() => {
  const REVEAL_CLASS = "reveal";
  const ACTIVE_CLASS = "active";

  /**
   * Initialize animations
   */
  const init = () => {
    setupScrollReveal();
    setupTypingEffect();
    handleInitialReveals();
  };

  /**
   * Setup scroll reveal observer
   */
  const setupScrollReveal = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(ACTIVE_CLASS);
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add reveal class to elements that should animate
    const elementsToReveal = [
      ...document.querySelectorAll(".hero-text"),
      ...document.querySelectorAll(".hero-image"),
      ...document.querySelectorAll(".about-card"),
      ...document.querySelectorAll(".skill-category"),
      ...document.querySelectorAll(".project-card"),
      ...document.querySelectorAll(".cp-card"),
      ...document.querySelectorAll(".contact-form"),
      ...document.querySelectorAll(".contact-info"),
      ...document.querySelectorAll(".footer-section"),
    ];

    elementsToReveal.forEach((el) => {
      if (!el.classList.contains(REVEAL_CLASS)) {
        el.classList.add(REVEAL_CLASS);
      }
      revealObserver.observe(el);
    });
  };

  /**
   * Handle elements that should be visible initially
   */
  const handleInitialReveals = () => {
    const initialElements = document.querySelectorAll(
      ".navbar, .hero .scroll-indicator",
    );
    initialElements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  };

  /**
   * Setup typing effect for hero subtitle
   */
  const setupTypingEffect = () => {
    const typingText = document.querySelector(".typing-text");
    if (!typingText) return;

    const fullText = typingText.textContent.trim();
    typingText.textContent = "";

    let index = 0;
    let isDeleting = false;
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseBeforeDelete = 3000;

    const type = () => {
      if (!isDeleting && index < fullText.length) {
        // Typing
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && index > 0) {
        // Deleting
        typingText.textContent = fullText.substring(0, index - 1);
        index--;
        setTimeout(type, deletingSpeed);
      } else if (!isDeleting && index === fullText.length) {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseBeforeDelete);
      } else if (isDeleting && index === 0) {
        // Pause before typing again
        isDeleting = false;
        setTimeout(type, 500);
      }
    };

    type();
  };

  /**
   * Add bounce animation to elements
   */
  const addBounceAnimation = (element) => {
    element.style.animation = "slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
  };

  /**
   * Add fade animation
   */
  const addFadeAnimation = (element, duration = 0.6) => {
    element.style.animation = `fadeIn ${duration}s ease-out`;
  };

  /**
   * Trigger element animation
   */
  const triggerAnimation = (
    element,
    animationType = "slideUp",
    duration = 0.6,
  ) => {
    element.style.animation = `${animationType} ${duration}s ease-out`;

    element.addEventListener(
      "animationend",
      () => {
        element.style.animation = "";
      },
      { once: true },
    );
  };

  /**
   * Stagger animation for multiple elements
   */
  const staggerAnimation = (
    elements,
    animationType = "slideUp",
    baseDuration = 0.6,
    staggerDelay = 0.1,
  ) => {
    elements.forEach((el, index) => {
      const delay = index * staggerDelay;
      el.style.animation = `${animationType} ${baseDuration}s ease-out ${delay}s both`;
    });
  };

  /**
   * Parallax scroll effect
   */
  const setupParallax = () => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    if (parallaxElements.length === 0) return;

    window.addEventListener("scroll", () => {
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute("data-parallax") || 0.5;
        const yPos = window.scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  };

  return {
    init,
    addBounceAnimation,
    addFadeAnimation,
    triggerAnimation,
    staggerAnimation,
    setupParallax,
  };
})();

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Animations.init);
} else {
  Animations.init();
}
