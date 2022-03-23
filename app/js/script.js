const burgerMenu = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    closeModal();
  } else {
    openModal();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 27 && header.classList.contains("open")) {
    closeModal();
  }
});

const closeModal = () => {
  header.classList.remove("open");
  body.classList.remove("noscroll");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
};

const openModal = () => {
  header.classList.add("open");
  body.classList.add("noscroll");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
};

const handleWindowResize = () => {
  if (window.innerWidth > 1023) {
    closeModal();
  }
};

window.onresize = handleWindowResize;
