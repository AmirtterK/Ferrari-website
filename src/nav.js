let lastScrollY = window.scrollY;
const navBar = document.querySelector(".nav-bar ");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    navBar.classList.add("nav-hidden");
  } else {
    navBar.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const sidebarToggle = document.getElementById("squadra-toggle");
    if (sidebarToggle && sidebarToggle.checked) {
      sidebarToggle.checked = false;
    }
  }
});
