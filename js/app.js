$(document).ready(function() {
  board = $('.box').toArray(' ');
 $('.box').on('click', function(){
   $(this).css('background-image', whoseTurn );
   moves ++;
 });
 console.log("check");
});
//variables to input into the gameboard array
var x = 'url(http://i.imgur.com/445g4BV.png)';
var o = 'url(http://i.imgur.com/5WVUarW.png)';
var start = ' ';
//variables for the start of the game
var moves = 0;
var board;
console.log (board);
var whoseTurn = function(){
 for (var i = moves; i < 9; i){
   if (moves % 2 === 0){
     $(this).attr('boolean', true);
     return x;
   }else if (moves % 2 ===1){
     $(this).attr('boolean', false);
     return o;
   }
 }
};
function legalMove(){


}

function whoWins(){




}



console.log(board);
