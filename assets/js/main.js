/**
 * Main Module
 * Central application initialization and coordinator
 */

const App = (() => {
  /**
   * Initialize entire application
   */
  const init = () => {
    // Ensure DOM is loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startup);
    } else {
      startup();
    }
  };

  /**
   * Application startup
   */
  const startup = () => {
    console.log(
      "%cPortfolio App Started",
      "color: #00ff88; font-size: 14px; font-weight: bold;",
    );

    // Initialize modules
    initializeModules();

    // Setup additional features
    setupBackToTop();
    setupPerformanceMonitoring();
  };

  /**
   * Initialize all modules
   */
  const initializeModules = () => {
    // Note: Modules are auto-initialized when their scripts load
    // This function is for logging and potential module orchestration

    const modules = [
      { name: "Theme", fn: () => typeof Theme !== "undefined" },
      { name: "Navigation", fn: () => typeof Navigation !== "undefined" },
      { name: "Animations", fn: () => typeof Animations !== "undefined" },
      { name: "Projects", fn: () => typeof Projects !== "undefined" },
      { name: "Contact", fn: () => typeof Contact !== "undefined" },
    ];

    modules.forEach((module) => {
      if (module.fn()) {
        console.log(`✓ ${module.name} module loaded`);
      }
    });
  };

  /**
   * Setup back to top button
   */
  const setupBackToTop = () => {
    const backToTopBtn = document.getElementById("back-to-top");

    if (!backToTopBtn) return;

    // Show/hide button based on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove("hidden");
      } else {
        backToTopBtn.classList.add("hidden");
      }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Initial hidden state
    backToTopBtn.classList.add("hidden");
  };

  /**
   * Setup performance monitoring (for development)
   */
  const setupPerformanceMonitoring = () => {
    if (window.location.hash === "#debug") {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 100) {
            console.warn(
              `⚠ Slow operation: ${entry.name} (${entry.duration.toFixed(2)}ms)`,
            );
          }
        }
      });

      observer.observe({ entryTypes: ["measure", "navigation"] });
    }
  };

  /**
   * Handle application errors
   */
  const setupErrorHandling = () => {
    window.addEventListener("error", (e) => {
      console.error("Global error:", e.error);
    });

    window.addEventListener("unhandledrejection", (e) => {
      console.error("Unhandled rejection:", e.reason);
    });
  };

  /**
   * Log page info (development)
   */
  const logPageInfo = () => {
    if (window.location.hash !== "#debug") return;

    console.group("Page Information");
    console.log("URL:", window.location.href);
    console.log("User Agent:", navigator.userAgent);
    console.log("Viewport:", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log("Performance:", {
      navigationStart: performance.timing.navigationStart,
      loadComplete:
        performance.timing.loadEventEnd - performance.timing.navigationStart,
    });
    console.groupEnd();
  };

  /**
   * Setup page visibility API
   */
  const setupPageVisibility = () => {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        console.log("Page hidden");
      } else {
        console.log("Page visible");
      }
    });
  };

  /**
   * Setup keyboard shortcuts
   */
  const setupKeyboardShortcuts = () => {
    document.addEventListener("keydown", (e) => {
      // Theme toggle: Ctrl + Shift + L
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "L") {
        e.preventDefault();
        if (typeof Theme !== "undefined") {
          Theme.toggle();
        }
      }

      // Scroll to top: Ctrl + Home
      if ((e.ctrlKey || e.metaKey) && e.key === "Home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  /**
   * Log welcome message
   */
  const logWelcome = () => {
    const styles = {
      header:
        "color: #00ff88; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff88;",
      text: "color: #38bdf8; font-size: 12px;",
      accent: "color: #00ff88; font-weight: bold;",
    };

    console.log("%c👋 Welcome to Rajesh's Portfolio!", styles.header);
    console.log(
      "%cBuilt with HTML5, CSS3 & Vanilla JavaScript\n%cCheck out the source code on GitHub → https://github.com",
      styles.text,
      styles.text,
    );
    console.log("%cTip: Press Ctrl+Shift+L to toggle theme", styles.accent);
  };

  // Initialize error handling
  setupErrorHandling();
  setupPageVisibility();
  setupKeyboardShortcuts();
  logWelcome();
  logPageInfo();

  return {
    init,
  };
})();

// Start the application
App.init();

// Ensure modules are initialized
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof Theme !== "undefined") Theme.init();
      if (typeof Navigation !== "undefined") Navigation.init();
      if (typeof Animations !== "undefined") Animations.init();
      if (typeof Projects !== "undefined") Projects.init();
      if (typeof Contact !== "undefined") Contact.init();
    }, 100);
  });
}
