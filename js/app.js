console.log("Insane in the Membrane");

$(document).ready(function() {

var board = 0; //default value of board set to zero
var player = 1;

$('.box').on("click", function (){    // if box has value, don't allow for input

  var boxSelected = $(this); // more user friendly code

  if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) { // if box has been claimed by the "claimed" class then alert user
    alert("This box has already been claimed, please try another!");
  } else {
    if (player === 1){
      boxSelected.addClass('X');
      player = 2;
    //if(board%2 === 0){ // if board%2 === 0 draw "X" --> true
      //boxSelected.text("X"); // inputs text into box when clicked
      //boxSelected.val("X"); // input X as value
      //boxSelected.addClass("claimed"); // adds claimed class after click
      //boxSelected.css('background-color', ("blue")); // adds color per box
    } else{
      boxSelected.addClass('O');
      player = 1;             // if board%2 === 0 draw "O"
      //boxSelected.text("O");
      //boxSelected.val("O");
      //boxSelected.addClass("claimed");
      //boxSelected.css('background-color', ("green"));
    }
      //  board++;      // board + 1
  }

function checkWinner(xOrO){
  if($('.box1').hasClass("X") && $('.box2').hasClass("X") && $('.box3').hasClass("X"))

}
  // how to determine a winner
    // first row win
  //  if ($('.box1').val() === "X" && $('.box2').val() === "X" && $('.box3').val() === "X"){
  //      alert("X wins!");
  //  }else if( $('.box1').val() === "O" && $('.box2').val() === "O" && $('.box3').val() === "O"){
  //      alert("O wins!");
  //  // second row win
  //  }if ($('.box4').val() === "X" && $('.box5').val() === "X" && $('.box6').val() === "X"){
  //      alert("X wins!");
  //  }else if( $('.box4').val() === "O" && $('.box5').val() === "O" && $('.box6').val() === "O"){
  //      alert("O wins!");
  //  // third row win
  //  }if ( $('.box7').val() === "X" && $('.box8').val() === "X" && $('.box9').val() === "X"){
  //      alert("X wins!");
  //  }else if( $('.box7').val() === "O" && $('.box8').val() === "O" && $('.box9').val() === "O"){
  //      alert("O wins!");
  //  // first column win
  //  }if ( $('.box1').val() === "X" && $('.box4').val() === "X" && $('.box7').val() === "X"){
  //      aler("X wins!");
//    }else if( $('.box1').val() === "O" && $('.box4').val() === "O" && $('.box7').val() === "O"){
  //      console.log("O wins");

  //  }if ( $('.box2').val() === "X" && $('.box5').val() === "X" && $('.box8').val() === "X"){
  //      alert("X wins!");
  //  // second column win
  //  }else if ( $('.box2').val() === "O" && $('.box5').val() === "O" && $('.box8').val() === "O"){
  //      alert("O wins!");
  //  // third column win
  //  }if ( $('.box3').val() === "X" && $('.box6').val() === "X" && $('.box9').val() === "X"){
  //      alert("X wins!");
  //  }else if ( $('.box3').val() === "O" && $('.box6').val() === "O" && $('.box9').val() === "O"){
  //      alert("O wins!");
  //  // first diagonal left to right
  //  }if ( $('.box1').val() === "X" && $('.box5').val() === "X" && $('.box9').val() === "X"){
  //      alert("X wins!");
  //  }else if ( $('.box1').val() === "O" && $('.box5').val() === "O" && $('.box9').val() === "O"){
  //      alert("O wins!");
  //  // second diagonal right to left
  //  }if ( $('.box3').val() === "X" && $('.box5').val() === "X" && $('.box7').val() === "X"){
  //      alert("X wins!");
  //  }else if ( $('.box3').val() === "O" && $('.box5').val() === "O" && $('.box7').val() === "O"){
  //      alert("O wins!");
  //  // add ability to end the game in a draw
  //  }else if (board === 9){
  //      alert("It's a draw, play again!");
  //  }
});

// how to reset the game and clear the board
    //  $('.btn').on("click", function handleClick(e){ // how to reset the game
    //  $('.box').removeClass("claimed"); // removes claimed class
    //  $('.box').text(" "); // remove text
    //  $('.box').val(" "); // remove value
    //  $('.box').css('background-color', "white"); // remove background-color
    //  board = 0; // "resets" board back to 0
    //  });

});
