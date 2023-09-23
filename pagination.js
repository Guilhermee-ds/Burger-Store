const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      }
    }
  });