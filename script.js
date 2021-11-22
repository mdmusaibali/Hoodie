"use strict";
// document.querySelector(".section--testimonial").scrollIntoView();
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
// NAVBAR SCROLLING-----------------------------------------------------
document.querySelectorAll(".nav__item").forEach(function (e) {
  e.addEventListener("click", function (el) {
    const id = el.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//Scrolling-------------------------------------
const buyButton = document.querySelector(".buy__button");
buyButton.addEventListener("click", function () {
  document
    .querySelector(".section--trending")
    .scrollIntoView({ behavior: "smooth" });
});

//Intersecting fade animation
const sections = document.querySelectorAll(".section");
const functions = function (thresholds, _) {
  const [entry] = thresholds;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("transformBottom");
};
const operations = {
  root: null,
  thresholds: 0.05,
};
const observer = new IntersectionObserver(functions, operations);
sections.forEach((s) => {
  observer.observe(s);
  // s.classList.add("transformBottom");
});

//SLIDER-------------------------------
