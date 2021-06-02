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