const burgerMenu= document.querySelector(".header__toggle");
const headerMenu =document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeItem = document.querySelector(".has-fade");

burgerMenu.addEventListener("click", () => {
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        
        //mobile menu
        fadeItem.classList.add("has-fade");

        //overlay
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    } else {
        header.classList.add("open");
        fadeItem.classList.remove("has-fade");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    }
});
