/**
 * Theme Module
 * Handles dark/light mode toggling and persistence
 */

const Theme = (() => {
  const THEME_KEY = "portfolio-theme";
  const DARK = "dark";
  const LIGHT = "light";

  /**
   * Initialize theme from localStorage or system preference
   */
  const init = () => {
    const themeBtn = document.getElementById("theme-btn");

    if (!themeBtn) return;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (prefersDark ? DARK : LIGHT);

    setTheme(theme);

    // Event listeners
    themeBtn.addEventListener("click", toggle);

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? DARK : LIGHT);
      }
    });
  };

  /**
   * Set theme and update DOM/localStorage
   */
  const setTheme = (theme) => {
    const html = document.documentElement;
    const themeBtn = document.getElementById("theme-btn");

    // Update data attribute
    html.setAttribute("data-theme", theme);

    // Update localStorage
    localStorage.setItem(THEME_KEY, theme);

    // Update button icon
    if (themeBtn) {
      themeBtn.innerHTML = theme === DARK ? "☀️" : "🌙";
      themeBtn.setAttribute(
        "aria-label",
        theme === DARK ? "Switch to light mode" : "Switch to dark mode",
      );
    }

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  };

  /**
   * Toggle between dark and light mode
   */
  const toggle = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || DARK;
    const newTheme = currentTheme === DARK ? LIGHT : DARK;

    setTheme(newTheme);
  };

  /**
   * Get current theme
   */
  const getTheme = () => {
    return document.documentElement.getAttribute("data-theme") || DARK;
  };

  return {
    init,
    toggle,
    getTheme,
    setTheme,
  };
})();

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Theme.init);
} else {
  Theme.init();
}
