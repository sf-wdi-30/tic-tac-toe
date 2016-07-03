console.log("frommmmmmmmmm Chicago");
//alert("I am an alert box!");
// wait for the DOM to finish loading
$(document).ready(function() {

  // all code to manipulate the DOM

var board = 0; //default value of board set to zero


//      $('.row').find('.box').click( // optimized click function to ensure alternating "X" and "O" after click
  //      function (){
    //      if(board%2 === 0){ // if board % 2 === 0 draw "X" --> true
      //      $(this).text("X"); // inputs text into box when clicked
      //      $(this).val("X");
      //      $(this).addClass("claimed"); // inputs value
      //    } else{ // if board % 2 === 0 draw "O"
      //      $(this).text("O");
      //      $(this).val("O");
      //      $(this).addClass("claimed");
    //      }
    //      board++; // board + 1
    //    });

$('.box').click(function (){ // if box has value, don't allow for input
  if ($(this).hasClass("claimed")){ // if box has been claimed by the "claimed" class then alert user
    alert("box has already been claimed");
  }
  else {
    if(board%2 === 0){ // if board % 2 === 0 draw "X" --> true
      $(this).text("X"); // inputs text into box when clicked
      $(this).val("X");
      $(this).addClass("claimed"); // adds claimed class after click
      $(this).css('background-color', ("blue")); // inputs value
    }
    else{
    // if board % 2 === 0 draw "O"
      $(this).text("O");
      $(this).val("O");
      $(this).addClass("claimed");
      $(this).css('background-color', ("green"));
    }
        board++; // board + 1

  }

});

      $('.box').on("click", function handleClick(e) { // how to click a specific box
        var whichBox = $(this).html();
        alert("You" + " " + "picked" + " " + whichBox);
      });

// how to prevent the player from choosing a previously claimed box
//if a box value is empty you may pick a box, if it's value is x or o then you preventDefault?
//$('.box').click(function isBoxClaimed(e){
//  if($(this).val() === "X" || "O"){
//    alert("box has already been claimed");
  // }
// }

//$(".box").click(function clicky(e) {
  // if ($(this).val() === "X" || "O") {
  //   alert("pick another box");
   //}
//});

// how to reset the game and clear the board
      $('.btn').on("click", function handleClick(e){ // how to reset the game
        alert("Reset!");
      });

  // goes inside this function

});
