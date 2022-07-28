const toggler = document.querySelector(".nav__toggle");
const navBar = document.querySelector(".nav");
toggler.addEventListener("click", () => {
  navBar.classList.toggle("nav__expanded");
});