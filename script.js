"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Design by Catalin V. (@hiskio https://twitter.com/hiskio) 
// https://dribbble.com/shots/3408986-Info-Card-Daily-UI-045
var slideElements = ['.back__slide', '.card__slide', '.content__slide'];
var inProgress = false;

var goToSlide = function goToSlide(slideElements, index) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  if (!inProgress) {
    inProgress = true;
    $('.active').addClass('exit');
    $('.active').removeClass('active');
    slideElements.forEach(function (elem) {
      _newArrowCheck(this, _this2);

      $("".concat(elem, ":nth-child(").concat(index, ")")).addClass('active');
    }.bind(this));
    var evenSlide = index % 2 === 0;
    if (evenSlide) $('.content__ping').addClass('content__ping--right');else $('.content__ping').removeClass('content__ping--right');
    $('.content__ping--noanimation').removeClass('content__ping--noanimation');
    setTimeout(function () {
      _newArrowCheck(this, _this2);

      return $('.exit').removeClass('exit');
    }.bind(this), 500);
    setTimeout(function () {
      _newArrowCheck(this, _this2);

      return inProgress = false;
    }.bind(this), 500);
  }
}.bind(void 0);

$('.content__slide:nth-child(1) .button').on('click', function () {
  _newArrowCheck(this, _this);

  return goToSlide(slideElements, 2);
}.bind(void 0));
$('.content__slide:nth-child(2) .button').on('click', function () {
  _newArrowCheck(this, _this);

  return goToSlide(slideElements, 1);
}.bind(void 0));
setTimeout(function () {
  _newArrowCheck(this, _this);

  return goToSlide(slideElements, 2);
}.bind(void 0), 10);
setTimeout(function () {
  _newArrowCheck(this, _this);

  return goToSlide(slideElements, 1);
}.bind(void 0), 1000); 



// let amount = 0;
// let slide = 0;
// const progress = () => {
//   amount++
//   $('.active .progress').css('transform', `scaleX(${amount/400})`)
//   if (amount >= 400){
//     amount = 0;
//     $('.active .progress').css('transform', `scaleX(${amount/400})`)
//     slide = (slide + 1) % 2 ;
//     goToSlide(slideElements, slide + 1);
//     clearInterval(progressInterval);
//     setTimeout(()=>{ 
//       progressInterval = setInterval(progress,20); 
//       $('.back__slide:not(.active) .progress').css('transform', 'scaleX(0)')
//     }, 2000);
//   }
// }
// let progressInterval = setInterval(progress,20);