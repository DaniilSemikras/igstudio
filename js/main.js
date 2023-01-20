$(document).ready(function(){
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__btn-prev'),
        nextArrow: $('.slider__btn-next'),
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              adaptiveHeight: true,

            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              adaptiveHeight: true,

            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });


//Accordeeon
var acc = document.getElementsByClassName("questions-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


///


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav-list");
const navButton = document.querySelector(".header__button");
const contentHeader = document.querySelector(".header__content");
const burger = document.querySelectorAll(".burger");
const body = document.querySelector('body');

hamburger.addEventListener("click", function() {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    navButton.classList.toggle("active");
    body.classList.toggle("overflow");
    contentHeader.classList.toggle("visible");
})


burger.forEach(item => item.addEventListener("click", () => {
  if(hamburger.classList.contains('active')) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    navButton.classList.remove("active");
    body.classList.remove("overflow");
    contentHeader.classList.remove("visible");
    console.log('dsdsd');
  }
}))