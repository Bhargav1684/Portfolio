// Navigation Bar
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-hidden");
  overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("sidebar-hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("sidebar-hidden");
  overlay.classList.add("hidden");
});

// Combined DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  // Animate elements
  const animElements = document.querySelectorAll(".animate");
  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  animElements.forEach((el) => animObserver.observe(el));

  // Sections to animate once
  const sections = [
    ".about-section",
    ".education-section",
    ".skills-section",
    ".projects-section",
    ".declaration-section",
  ];

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) {
      sectionObserver.observe(el);
    }
  });
});

// Contact Section
window.addEventListener("scroll", () => {
  const contactSection = document.getElementById("contact");
  const rect = contactSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    contactSection.classList.add("visible");
  }
});

window.dispatchEvent(new Event("scroll"));

// Back to top
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
