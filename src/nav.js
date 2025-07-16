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
