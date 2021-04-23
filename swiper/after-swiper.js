var swiper = new Swiper('.swiper-container', {
    // effect: 'coverflow',
    spaceBetween: 50,
    initialSlide:1,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
      },
    autoplay: {
        delay: 1000,
        disableOnInteraction:false
      },
});