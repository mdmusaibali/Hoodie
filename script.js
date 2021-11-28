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
let curSlide = 0;
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const allSlides = document.querySelectorAll(".slide");
const goToSlide = function (slide) {
  allSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
goToSlide(0);
const nextSlide = function () {
  if (curSlide == allSlides.length - 1) {
    curSlide = 0;
    goToSlide(curSlide);
    activateDot(curSlide);
  } else {
    curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  }
};
const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = allSlides.length - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  } else {
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  }
};
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") prevSlide();
  if (e.key == "ArrowRight") nextSlide();
});
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

//Dot
const dotContainer = document.querySelector(".dots");
const createDots = function () {
  allSlides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
createDots();
const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);
