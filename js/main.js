const toggler = document.querySelector(".nav__toggle");
const navBar = document.querySelector(".nav");
toggler.addEventListener("click", () => {
  navBar.classList.toggle("nav__expanded");
});

// plus services
const tabs = document.querySelectorAll(".tab");
const tabContects = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    tabs.forEach((tab) => tab.classList.remove("active"));
    console.log(tab);
    tabContects.forEach((tabContect) => tabContect.classList.remove("active"));

    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});