document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            200: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
            1024: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
            1224: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            1400: {
                spaceBetween: 60,
                slidesPerView: 1,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet swiper-pagination-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

    });
});
