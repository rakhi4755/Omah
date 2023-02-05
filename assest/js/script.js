$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$('.slide_part').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "",
    nextArrow: "",
    centerMode: true,
    centerPadding: "0",
  });

  var typed = new Typed('.heading_bnr', {
    strings: ["Temukan Hunian Keluarga Sesuai Keinginanmu",],
    typeSpeed: 20
  });