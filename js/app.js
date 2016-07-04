$(document).ready(function() {
  board = $('.box').toArray('');
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
 for (var i = moves; i <= 8; i){
   if (moves % 2 === 0){
     $(this).attr('boolean', 'true');
     return x;
   }else if (moves % 2 ===1){
     $(this).attr('boolean', 'false');
     return o;
     }
    }
  checkWinner();
  legalMove();
};

var legalMove = function(){
if($(this).attr('boolean') !== 'true' || 'false'){
  return true;
}
console.log(legalMove);

};

function checkWinner(){
  if ($(board[0]).attr('boolean') === 'true' && $(board[1]).attr('boolean') === 'true' && $(board[2]).attr('boolean') === 'true'){
    alert("Young Shia has won!");
  }else if ($(board[0]).attr('boolean') === 'false' && $(board[1]).attr('boolean') === 'false' && $(board[2]).attr('boolean') === 'false'){
  alert("Old Shia has won!");
}else if ($(board[3]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[5]).attr('boolean') === 'true'){
  alert("Young Shia has won!");
}else if ($(board[3]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[5]).attr('boolean') === 'false'){
  alert("Old Shia has won!");
}else if ($(board[6]).attr('boolean') === 'true' && $(board[7]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
  alert("Young Shia has won!");
}else if ($(board[6]).attr('boolean') === 'false' && $(board[7]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else if ($(board[0]).attr('boolean') === 'true' && $(board[3]).attr('boolean') === 'true' && $(board[6]).attr('boolean') === 'true'){
alert("Young Shia has won!");
}else if ($(board[0]).attr('boolean') === 'false' && $(board[3]).attr('boolean') === 'false' && $(board[6]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else if ($(board[1]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[7]).attr('boolean') === 'true'){
alert("Young Shia has won!");
}else if ($(board[1]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[7]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else if ($(board[2]).attr('boolean') === 'true' && $(board[5]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
alert("Young Shia has won!");
}else if ($(board[2]).attr('boolean') === 'false' && $(board[5]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else if ($(board[0]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
alert("Young Shia has won!");
}else if ($(board[0]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else if ($(board[2]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[6]).attr('boolean') === 'true'){
alert("Young Shia has won!");
}else if ($(board[2]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[6]).attr('boolean') === 'false'){
alert("Old Shia has won!");
}else {
  alert("Just like watching the Transformers films, nobody wins");
}
}
console.log(board);
