var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})