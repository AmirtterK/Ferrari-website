let lastScrollY = window.scrollY;
let scrollTicking = false;
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      navBar.classList.add("nav-hidden");
    } else {
      navBar.classList.remove("nav-hidden");
    }
    lastScrollY = currentScrollY;
    scrollTicking = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const sidebarToggle = document.getElementById("squadra-toggle");
    if (sidebarToggle && sidebarToggle.checked) {
      sidebarToggle.checked = false;
    }
    closeMobileNav();
  }
});

// Mobile nav drawer
const hamburger = document.getElementById("nav-hamburger");
const mobileDrawer = document.getElementById("nav-mobile-drawer");
const navCloseBtn = document.getElementById("nav-close");
const drawerOverlay = document.getElementById("nav-drawer-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const mobileSquadraLabel = document.getElementById("mobile-squadra-label");

function openMobileNav() {
  mobileDrawer.classList.add("open");
  if (drawerOverlay) {
    drawerOverlay.style.display = "block";
    requestAnimationFrame(() => drawerOverlay.classList.add("open"));
  }
}

function closeMobileNav() {
  mobileDrawer.classList.remove("open");
  if (drawerOverlay) {
    drawerOverlay.classList.remove("open");
    drawerOverlay.addEventListener("transitionend", () => {
      drawerOverlay.style.display = "none";
    }, { once: true });
  }
}

if (hamburger) hamburger.addEventListener("click", openMobileNav);
if (navCloseBtn) navCloseBtn.addEventListener("click", closeMobileNav);
if (drawerOverlay) drawerOverlay.addEventListener("click", closeMobileNav);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

if (mobileSquadraLabel) {
  mobileSquadraLabel.addEventListener("click", closeMobileNav);
}
