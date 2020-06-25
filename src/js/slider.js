$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    speed: 300,
    arrows: false,
    infinite: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    variableWidth:true,
    arrows: true,

  });

});
