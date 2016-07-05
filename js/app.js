console.log("Insane in the Membrane");

$(document).ready(function() {

var turnCounter = 0; //default value of turn position set to zero

$('.box').on("click", function (){    // if box has value, don't allow for input
var boxSelected = $(this); // more user friendly code
if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) { // if box has been claimed by the "claimed" class then alert user
    alert("This box has already been claimed, please try another!");
  } else{
      if(turnCounter%2 === 0){ // if board%2 === 0 draw "X" --> true
        boxSelected.text('X'); // inputs text into box when clicked
        boxSelected.addClass('X'); // adds X class after click
        boxSelected.css('background-color', "blue"); // add blue to color click
      }
      else {         // if board%2 === draw "O"
        boxSelected.text("O");
        boxSelected.addClass("O");
        boxSelected.css('background-color', "green"); // add green to color click
      }
        turnCounter++; // turnCounter + 1
    }
    // how to determine a winner
    // first row win
    if ($('.box1').hasClass('X') && $('.box2').hasClass('X') && $('.box3').hasClass('X')){
        alert("X wins!");
    }else if( $('.box1').hasClass('O') && $('.box2').hasClass('O') && $('.box3').hasClass('O')){
        alert("O wins!");
    // second row win
    }if ($('.box4').hasClass('X') && $('.box5').hasClass('X') && $('.box6').hasClass('X')){
        alert("X wins!");
    }else if( $('.box4').hasClass('O') && $('.box5').hasClass('O') && $('.box6').hasClass('O')){
        alert("O wins!");
    // third row win
    }if ( $('.box7').hasClass('X') && $('.box8').hasClass('X') && $('.box9').hasClass('X')){
        alert("X wins!");
    }else if( $('.box7').hasClass('O') && $('.box8').hasClass('O') && $('.box9').hasClass('O')){
        alert("O wins!");
    // first column win
    }if ( $('.box1').hasClass('X') && $('.box4').hasClass('X') && $('.box7').hasClass('X')){
        alert("X wins!");
    }else if( $('.box1').hasClass('O') && $('.box4').hasClass('O') && $('.box7').hasClass('O')){
        alert("O wins");
    // second column win
    }if ( $('.box2').hasClass('X') && $('.box5').hasClass('X') && $('.box8').hasClass('X')){
        alert("X wins!");
    }else if ( $('.box2').hasClass('O') && $('.box5').hasClass('O') && $('.box8').hasClass('O')){
        alert("O wins!");
    // third column win
    }if ( $('.box3').hasClass('X') && $('.box6').hasClass('X') && $('.box9').hasClass('X')){
        alert("X wins!");
    }else if ( $('.box3').hasClass('O') && $('.box6').hasClass('O') && $('.box9').hasClass('O')){
        alert("O wins!");
    // first diagonal left to right
    }if ( $('.box1').hasClass('X') && $('.box5').hasClass('X') && $('.box9').hasClass('X')){
        alert("X wins!");
    }else if ( $('.box1').hasClass('O') && $('.box5').hasClass('O') && $('.box9').hasClass('O')){
        alert("O wins!");
    // second diagonal right to left
    }if ( $('.box3').hasClass('X') && $('.box5').hasClass('X') && $('.box7').hasClass('X')){
        alert("X wins!");
    }else if ( $('.box3').hasClass('O') && $('.box5').hasClass('O') && $('.box7').hasClass('O')){
        alert("O wins!");
    // add ability to end the game in a draw
    }else if (turnCounter === 9){
        alert("It's a draw, play again!");
    }
});

    // how to reset the game and clear the board
      $('.btn').on("click", function handleClick(e){ // how to reset the game
        $('.box').removeClass("X");
        $('.box').removeClass("O");// removes claimed class
        $('.box').text(" "); // remove text
        //$('.box').val(" "); // remove value
        $('.box').css('background-color', "white"); // remove background-color
        turnCounter = 0; // "resets" board back to 0
      });

});
