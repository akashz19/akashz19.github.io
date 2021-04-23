var swiper = new Swiper('.swiper-container', {
    // effect: 'coverflow',
    spaceBetween: 50,
    initialSlide:1,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // coverflowEffect: {
    //     rotate: 0,// set to 0 to stop rotation
    //     stretch: 0,
    //     depth: 0,
    //     modifier: 1,
    //     slideShadows: true,
    // },
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