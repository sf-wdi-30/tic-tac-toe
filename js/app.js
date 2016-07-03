// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var turnCount = 0;

  var tacoCat = '<img src="tacocat.png" height="150px" width="150px">';
  var pizzaCat = '<img src="pizzacat.png" height="150px" width="150px">';

  $('.box').on("click", function input() {
    if($(this).html()=== "") {
      if (turnCount % 2 === 0) {
        $(this).html(tacoCat);
      } else {
        $(this).html(pizzaCat);
      } turnCount++;
    } else if ($(this).html()!== "") {
      alert ('occupied by another cat');
    }
  });


  $('.reset').on("click", function(){
    $('.btn').append('');
  });


});
