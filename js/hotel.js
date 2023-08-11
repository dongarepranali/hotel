var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1200:{
            items:5
        }
    }
})