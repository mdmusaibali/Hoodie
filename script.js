"use strict";
const navbar = document.querySelector("nav");
const iconCart = document.querySelector(".icon__cart");
const logo = document.querySelector(".logo");
const section1 = document.querySelector(".section--1");
const handleHover = function (e) {
  if (e.target.classList.contains("nav__item")) {
    const clickedElem = e.target;
    const siblings = clickedElem.closest("nav").querySelectorAll(".nav__item");
    siblings.forEach((el) => {
      if (clickedElem !== el) {
        el.style.opacity = this;
        iconCart.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
navbar.addEventListener("mouseover", handleHover.bind("0.5"));
navbar.addEventListener("mouseout", handleHover.bind("1"));

//CART---------------------------------------------
iconCart.addEventListener("click", function () {
  section1.classList.toggle("transform");
});
document.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (e.key == "Escape") {
    section1.classList.remove("transform");
  }
});
