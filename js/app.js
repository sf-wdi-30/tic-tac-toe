// wait for the DOM to finish loading
$(document).ready(function() {
//global scope constants
var tictactoe; (function()){
  var x= "X";
  var O= "O";
  BLANK= " ";
};

var currentPlayer = X,
      moves = 0,
      board = [ BLANK, BLANK, BLANK, BLANK, BLANK,
                BLANK, BLANK, BLANK, BLANK ];

//alternate players
var switchPlayer = function() {
  currentPlayer = ( currentPlayer === X ) ? O : X;
  displayMessage( 'Current Player:' + currentPlayer );
};










//$(".col-md-4").on("click",function(e){
//  $(this).css("background", "blue");
//  });


});

console.log("hi")
//sanity check (okay!)
