console.log("Insane in the Membrane");
//alert("I am an alert box!");
// wait for the DOM to finish loading
$(document).ready(function() {

  // all code to manipulate the DOM

var board = 0; //default value of board set to zero

$('.box').click(function (){ // if box has value, don't allow for input
  if ($(this).hasClass("claimed")){ // if box has been claimed by the "claimed" class then alert user
    alert("box has already been claimed, please try another box");
  }
  else {
    if(board%2 === 0){ // if board % 2 === 0 draw "X" --> true
      $(this).text("X"); // inputs text into box when clicked
      $(this).val("X"); // input X as value
      $(this).addClass("claimed"); // adds claimed class after click
      $(this).css('background-color', ("blue")); // adds color per box
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
  // how to determine a winner
  // first row win
    if ($('.box1').val() === "X" && $('.box2').val() === "X" && $('.box3').val() === "X"){
      console.log("X wins");
    }else if( $('.box1').val() === "O" && $('.box2').val() === "O" && $('.box3').val() === "O"){
        console.log("O wins");
  // second row win
    }if ($('.box4').val() === "X" && $('.box5').val() === "X" && $('.box6').val() === "X"){
      console.log("X wins");
    }else if( $('.box4').val() === "O" && $('.box5').val() === "O" && $('.box6').val() === "O"){
          console.log("O wins");
  // third row win
    }if ( $('.box7').val() === "X" && $('.box8').val() === "X" && $('.box9').val() === "X"){
        console.log("X wins");
    }else if( $('.box7').val() === "O" && $('.box8').val() === "O" && $('.box9').val() === "O"){
        console.log("O wins");
  // first column win
    }if ( $('.box1').val() === "X" && $('.box4').val() === "X" && $('.box7').val() === "X"){
        console.log("X wins");
    }else if( $('.box1').val() === "O" && $('.box4').val() === "O" && $('.box7').val() === "O"){
        console.log("O wins");

    }if ( $('.box2').val() === "X" && $('.box5').val() === "X" && $('.box8').val() === "X"){
        console.log("X wins");
  // second column win
    }else if ( $('.box2').val() === "O" && $('.box5').val() === "O" && $('.box8').val() === "O"){
        console.log("O wins");
  // third column win
    }if ( $('.box3').val() === "X" && $('.box6').val() === "X" && $('.box9').val() === "X"){
        console.log("X wins");
    }else if ( $('.box3').val() === "O" && $('.box6').val() === "O" && $('.box9').val() === "O"){
        console.log("O wins");
  // first diagonal left to right
    }if ( $('.box1').val() === "X" && $('.box5').val() === "X" && $('.box9').val() === "X"){
        console.log("X wins");
    }else if ( $('.box1').val() === "O" && $('.box5').val() === "O" && $('.box9').val() === "O"){
        console.log("O wins");
// second diagonal right to left
    }if ( $('.box3').val() === "X" && $('.box5').val() === "X" && $('.box7').val() === "X"){
        console.log("X wins");
    }else if ( $('.box3').val() === "O" && $('.box5').val() === "O" && $('.box7').val() === "O"){
        console.log("O wins");
    }else if (board === 9){ // add ability to end the game in a draw
      console.log ("It's a draw, play again!");
    }
}
);

// how to reset the game and clear the board
      $('.btn').on("click", function handleClick(e){ // how to reset the game
      $('.box').removeClass("claimed"); // removes claimed class
      $('.box').text(" "); // remove text
      $('.box').val(" "); // remove value
      $('.box').css('background-color', "white"); // remove background-color
      board = 0; // "resets" board back to 0
      });



});
