



$(".mb-c").click(function(){
  $(".mb-menu").addClass('left0');
  $('html').addClass('overflow')
});

$(".back-arrow").click(function(){
  $(".mb-menu").removeClass('left0');
  $('html').removeClass('overflow')
});


$(".mb-d-tg").click(function(){
  $(".nav-left").toggleClass('left0');
  $('html').toggleClass('overflow')
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
            items:1
        },
        1000:{
            items:1
        }
    }
})