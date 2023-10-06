const swiperT = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    485: {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.svgArrow',
        prevEl: '.svgArrow',
      },
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  },

})