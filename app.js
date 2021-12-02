// Header Background
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("active", window.scrollY > 50);
});

// Home Content
const homeContent = document.querySelector(".home__content");

window.addEventListener("scroll", () => {
  homeContent.style.transform = "translateY(" + 0.5 * window.scrollY + "px)";
});

// Menu Button
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelectorAll(".menu");
const navigation = document.querySelector(".navigation");

let idx = 0;
menuBar.addEventListener("click", () => {
  menu.forEach((element) => {
    element.classList.remove("active");
    element.style.display = "none";
  });

  idx = (idx + 1) % menu.length;
  menu[idx].classList.add("active");
  if (idx === 1) {
    menu[idx].style.color = "black";
  }
  menu[idx].style.display = "block";

  navigation.classList.toggle("active");
});

// Scroll Effect
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveal.length; i++) {
    let scrollHeight = reveal[i].getBoundingClientRect().top;
    let height = 100;
    if (window.innerHeight > scrollHeight + height) {
      reveal[i].style.opacity = "1";
    }
  }
});
