document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
  
    if (!themeToggle) {
      console.error("Theme toggle button not found!");
      return;
    }
  
    
    
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileMenuPanel = document.getElementById("mobile-menu-panel");
    const menuBackdrop = document.getElementById("menu-backdrop");
  
    function openMenu() {
      mobileMenuOverlay.classList.remove("hidden");
      requestAnimationFrame(() => {
        menuBackdrop.classList.add("opacity-50");
        mobileMenuPanel.classList.remove("translate-x-full"); // note: positive for right
      });
    }
  
    function closeMenuFunc() {
      menuBackdrop.classList.remove("opacity-50");
      mobileMenuPanel.classList.add("translate-x-full");
      setTimeout(() => {
        mobileMenuOverlay.classList.add("hidden");
      }, 300);
    }
  
    menuToggle.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeMenuFunc);
    menuBackdrop.addEventListener("click", closeMenuFunc);
  });
 