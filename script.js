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

//Adding hoodies to cart
const hoodie1 = {
  hoodieName: "Pink Hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (1).jfif",
  maxQuan: 1,
};
const hoodie2 = {
  hoodieName: "Velvet Hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (2).jpg",
  maxQuan: 1,
};
const hoodie3 = {
  hoodieName: "Printed Hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (3).jpg",
  maxQuan: 1,
};
const hoodie4 = {
  hoodieName: "Black hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (4).jpg",
  maxQuan: 1,
};
const hoodie5 = {
  hoodieName: "Creme hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (5).jpg",
  maxQuan: 1,
};
const hoodie6 = {
  hoodieName: "Grey hoodie",
  hoodieSize: ["M", "L", "XL", "XXL"],
  count: 1,
  imageLocation: "img/hoodies/hmgoepprod (6).jpg",
  maxQuan: 1,
};
const hoodies = [hoodie1, hoodie2, hoodie3, hoodie4, hoodie5, hoodie6];

const countItemsInCart = function () {
  var [...test] = cartBox.children;
  var counter = 0;
  test.forEach((el) => {
    if (el.classList.contains("cart--item")) {
      counter++;
    }
  });
  return counter;
};

const cartBox = document.querySelector(".cart--items");
const numberOfItemsInCart = document.querySelector(".itemsincart");
numberOfItemsInCart.textContent = `${countItemsInCart()}`;
const itemInCart = [];
const trending = document.querySelector(".trending");
trending.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn--addToCart");
  if (!clicked) return;
  const hoodieNumber = clicked.dataset.test;
  const hoodieName = hoodies[hoodieNumber].hoodieName;
  const hoodieImage = hoodies[hoodieNumber].imageLocation;
  const hoodieInfo = `        <div class="cart--item" data-hoodienum="${hoodieNumber}" >
    <div class="cart--item-image">
      <img class="hoodie--image" src="${hoodieImage}" />
    </div>
    <div class="card--item-about">
      <h2>${hoodieName}</h2>
      <div class="sizeandquantity">
        <p><span class="size" data-test3="${hoodieNumber}">M</span></p>
        <div class="quantity">
          <button class="quantity--button quantity--button-minus" data-test1="${hoodieNumber}">-</button>
          <p><span class="quantityOfItem" data-test2="${hoodieNumber}">1</span></p>
          <button class="quantity--button quantity--button-plus" data-test1="${hoodieNumber}">+</button>
        </div>
        <p class="amount">
          <span class="price" data-test4="${hoodieNumber}">₹1499</span>
        </p>
      </div>
    </div>
    </div>`;
  if (!itemInCart.includes(hoodieNumber)) {
    cartBox.insertAdjacentHTML("beforeend", hoodieInfo);
    itemInCart.push(hoodieNumber);
    numberOfItemsInCart.textContent = `${countItemsInCart()}`;
  } else return;
});

cartBox.addEventListener("click", function (e) {
  const clickedPlus = e.target.closest(".quantity--button-plus");
  if (!clickedPlus) return;
  const HoodieNumber = clickedPlus.dataset.test1;
  const test = document.querySelectorAll(".quantityOfItem");
  test.forEach((el) => {
    if (HoodieNumber == el.dataset.test2) {
      // console.log(hoodies[HoodieNumber].maxQuan);
      el.textContent = `${++hoodies[HoodieNumber].maxQuan}`;
    }
  });
  const prices = document.querySelectorAll(".price");
  prices.forEach((el, idx) => {
    if (HoodieNumber == el.dataset.test4) {
      el.textContent = `₹${1499 * hoodies[HoodieNumber].maxQuan}`;
    }
  });
});

cartBox.addEventListener("click", function (e) {
  const clickedMinus = e.target.closest(".quantity--button-minus");
  if (!clickedMinus) return;
  const HoodieNumber = clickedMinus.dataset.test1;
  const test = document.querySelectorAll(".quantityOfItem");
  test.forEach((el) => {
    if (HoodieNumber == el.dataset.test2) {
      if (hoodies[HoodieNumber].maxQuan == 1) {
        var [...test] = cartBox.children;
        test.forEach((el) => {
          if (el.classList.contains("cart--item")) {
            if (el.dataset.hoodienum == HoodieNumber) {
              if (itemInCart.includes(el.dataset.hoodienum)) {
                var num = itemInCart.indexOf(`${el.dataset.hoodienum}`);
                itemInCart.splice(num, 1);
                el.remove();
                numberOfItemsInCart.textContent = `${countItemsInCart()}`;
                // console.log(countItemsInCart());
              }
            }
          }
        });
      }
      if (!(hoodies[HoodieNumber].maxQuan <= 1)) {
        el.textContent = `${--hoodies[HoodieNumber].maxQuan}`;
        1499 * hoodies[HoodieNumber].maxQuan;
      }
    }
  });
  const prices = document.querySelectorAll(".price");
  prices.forEach((el, idx) => {
    if (HoodieNumber == el.dataset.test4) {
      el.textContent = `₹${1499 * hoodies[HoodieNumber].maxQuan}`;
    }
  });
});

cartBox.addEventListener("click", function (e) {
  const clickedSize = e.target.closest(".size");
  if (!clickedSize) return;
  const HoodieNumber = clickedSize.dataset.test3;
  const sizes = document.querySelectorAll(".size");
  sizes.forEach((el) => {
    if (HoodieNumber == el.dataset.test3) {
      if (hoodies[HoodieNumber].count > 3) hoodies[HoodieNumber].count = 0;
      el.textContent = `${
        hoodies[HoodieNumber].hoodieSize[hoodies[HoodieNumber].count++]
      }`;
    }
  });
});
