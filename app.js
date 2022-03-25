
$('.slide-img-user').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

$('.pushdy-digtal-iteam').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  
  prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-circle-arrow-left"></i></button>`,

  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-circle-arrow-right"></i></button>`
});