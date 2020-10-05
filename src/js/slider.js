$(document).ready(function () {

  var owl = $(".owl-carousel");
  
  owl.owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2,
        margin: 15
      },
      1200: {
        items: 3,
        margin: 30
      }
    }
  });
  $(".arrows__right").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".arrows__left").click(function(){
		owl.trigger("prev.owl.carousel");
	});
});