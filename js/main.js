 $(document).ready(function() {
   const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'coverflow',
   autoplay: {
   delay: 3000,
 },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var menuButton = $('.menu-button');
menuButton.on('click', function () {
  $('.navbar-bottom').toggleClass('navbar-bottom--visible');
});

   
 });