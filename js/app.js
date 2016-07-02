console.log("frommmmmmmmmm Chicago");
//alert("I am an alert box!");
// wait for the DOM to finish loading
$(document).ready(function() {

  // all code to manipulate the DOM

var board = 0; //default value of board set to zero

      $('.row').find('.box').click( // optimized click function to ensure alternating "X" and "O" after click
        function(){
          if(board%2 === 0){ // if board % 2 === 0 draw "X" --> true
            $(this).text("X");
          } else{ // if board % 2 === 0 draw "O"
            $(this).text("O");
          }
          board++; // board + 1
      });



      //$('.box').on("click", function handleClick(e) { // how to click a specific box
        //var whichBox = $(this).html();
        //alert(player1 + " " + "picked" + whichBox);
      //});

      //$('.box').on("click", function drawX(){ // how to insert x after clicking
        //$(this).append("x");
      //})

  // how to alternate to player2


// how to prevent the player from choosing a previously claimed box
      //preventDefault();
// how to reset the game and clear the board
      $('.btn').on("click", function handleClick(e){ // how to reset the game
        alert("Reset!");
      });

  // goes inside this function

});
