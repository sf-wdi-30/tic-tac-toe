// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var turnCount = 0;

  $('.box').on("click", function input() {
    if (turnCount % 2 === 0) {
      $(this).append('<img src="tacocat.png" height="150px" width="150px">');
    } else {
      $(this).append('<img src="pizzacat.png" height="150px" width="150px">');
    } turnCount++;
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
