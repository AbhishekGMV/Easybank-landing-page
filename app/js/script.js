const burgerMenu= document.querySelector(".header__toggle");
const headerMenu =document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector('body');


burgerMenu.addEventListener("click", () => {
    if(header.classList.contains("open")) { //close
        header.classList.remove("open");

        body.classList.remove("noscroll");
        //mobile menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
          });

        //overlay
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    } else {
        header.classList.add("open");
        body.classList.add("noscroll");
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});
