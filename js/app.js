console.log("frommmmmmmmmm Chicago");
//alert("I am an alert box!");
// wait for the DOM to finish loading
$(document).ready(function() {

  // all code to manipulate the DOM


      $('.box').on("click", function handleClick(e) { // how to click a specific box
        var whichBox = $(this).html();
        alert("You just picked" + whichBox);
      });

      $('.box').on("click", function drawX(){ // how to insert x after clicking
        $(this).append("x");
      })

      $('.btn').on("click", function handleClick(e){ // how to reset the game
        alert("Reset!");
      });

  // goes inside this function

});
