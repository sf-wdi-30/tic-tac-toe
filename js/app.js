// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  $('.box').on("click", function(){
    $(this).append('<img src="tacocat.png" height="64px" width="64px">');
  });

// var x = console.log('sanity check');
// function xWins {
//   if x =
// }
//
//   function currentSquare() {
//     return $("tr").find("td").eq(kyrel.x);
//   }
//
//
//   function draw() {
//     $(".instructions").append("<div>draw</div>");
//     currentSquare().html('<div class="dot"></div>');
//     currentSquare().find('.dot').css('background', kyrel.color).addClass('dot-'+kyrel.color);
//   }
//
//   .on("click", function(e)) {
//     $().append();
//   }



});
