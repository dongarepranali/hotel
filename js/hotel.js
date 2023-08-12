var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

//  roomes carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1200:{
            items:5
        }
    }
})
// form application
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }