/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

//For Certificateion logos

// Select all certification wrappers
const logoWrappers = document.querySelectorAll(
  ".certifications__logos-wrapper"
);

logoWrappers.forEach((wrapper) => {
  const logos = Array.from(wrapper.children);
  const visibleCount = 5; // number of logos visible at a time

  // Clone logos to fill loop for smooth scroll
  const totalClones = logos.length; // clone all original logos
  for (let i = 0; i < totalClones; i++) {
    const clone = logos[i].cloneNode(true);
    wrapper.appendChild(clone);
  }
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("navItems");

if (hamburger && navItems) {
  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navItems.classList.remove("active");
    });
  });
}
