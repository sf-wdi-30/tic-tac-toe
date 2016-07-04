// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('.box').on('click', function(){
    $(this).css('background-image', whoseTurn );
  });
  console.log("check");
});

//variables to input into the gameboard array
var x = 'url(http://i.imgur.com/445g4BV.png)';
var o = 'url(http://i.imgur.com/5WVUarW.png)';
var start = ' ';

//variables for the start of the game
var firstPlayer = x;
var moves = 0;
var board = $('.box').toArray();
console.log (board);



/*
whoseTurn = function(){
  for(var i = moves; i<9; i++);
  if (i % 2 === 0){
    return true;
  } else {
    return false;
  }
  if (true){
    board.unshift(0);
  } else {
    board.unshift(0);
  }
};
*/
