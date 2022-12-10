$(document).ready(function(){

$('.slider__list').slick({
    dots: false,
    arrows:true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
});

$(".prev-btn").click(function () {
  $(".slider__list").slick("slickPrev");
});
$(".next-btn").click(function () {
  $(".slider__list").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".slider__list").on("afterChange", function () {
  if ($(".slick-prev").hasClass("slick-disabled")) {
    $(".prev-btn").addClass("slick-disabled");
  } else {
    $(".prev-btn").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
    $(".next-btn").addClass("slick-disabled");
  } else {
    $(".next-btn").removeClass("slick-disabled");
  }
});

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  data:false,
  nav:true,
  autoplaySpeed:2000,
  autoplay:true,
    responsive:{
      0:{
        items:1
      },

      800:{
        items:2
      },

      1000:{
        items:3
      },

      1250:{
        items:4
      }
  }
});

})
