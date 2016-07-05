$(document).ready(function() {
  board = $('.box').toArray('');
 $('.box').on('click', function(){
   $(this).css('background-image', whoseTurn );
   moves ++;
 });
});
//variables to input into the gameboard array
var x = 'url(http://i.imgur.com/445g4BV.png)';
var o = 'url(http://i.imgur.com/5WVUarW.png)';
//variables for the start of the game
var moves = 0;
var board;
//funciton to determine whose turn it is and to change the element attribute in the DOM accordingly
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
  };

//function that determines whether the attribute of 'this' element has been changed in the DOM by onClick.
var islegalMove= function(){
  if($(this).attr('background-image') === 'undefined'){
    return true;
  }
    alert("this is an illegal move");
};

var checkWinner = function(){
  if ($(board[0]).attr('boolean') === 'true' && $(board[1]).attr('boolean') === 'true' && $(board[2]).attr('boolean') === 'true'){
    alert("Young Shia has won!");
  }else if ($(board[0]).attr('boolean') === 'false' && $(board[1]).attr('boolean') === 'false' && $(board[2]).attr('boolean') === 'false'){
    alert("Old Shia has won!");
  }else if ($(board[3]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[5]).attr('boolean') === 'true'){
    alert("Young Shia wins");
  }else if ($(board[3]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[5]).attr('boolean') === 'false'){
    alert("Old Shia is the winner!");
  }else if ($(board[6]).attr('boolean') === 'true' && $(board[7]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
    alert("Young Shia has defeated himself!");
  }else if ($(board[6]).attr('boolean') === 'false' && $(board[7]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
    alert("Old Shia triumphs!");
  }else if ($(board[0]).attr('boolean') === 'true' && $(board[3]).attr('boolean') === 'true' && $(board[6]).attr('boolean') === 'true'){
    alert("Young Shia for the win!");
  }else if ($(board[0]).attr('boolean') === 'false' && $(board[3]).attr('boolean') === 'false' && $(board[6]).attr('boolean') === 'false'){
    alert("Old Shia has won the game!");
  }else if ($(board[1]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[7]).attr('boolean') === 'true'){
    alert("Young Shia is the victor!");
  }else if ($(board[1]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[7]).attr('boolean') === 'false'){
    alert("Old Shia has crushed it!");
  }else if ($(board[2]).attr('boolean') === 'true' && $(board[5]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
    alert("Young Shia is the winner!");
  }else if ($(board[2]).attr('boolean') === 'false' && $(board[5]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
    alert("Old Shia has defeated young Shia!");
  }else if ($(board[0]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[8]).attr('boolean') === 'true'){
    alert("Young Shia has earned the win!");
  }else if ($(board[0]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[8]).attr('boolean') === 'false'){
    alert("Old Shia has earned the win!");
  }else if ($(board[2]).attr('boolean') === 'true' && $(board[4]).attr('boolean') === 'true' && $(board[6]).attr('boolean') === 'true'){
    alert("Young Shia is victorious!");
  }else if ($(board[2]).attr('boolean') === 'false' && $(board[4]).attr('boolean') === 'false' && $(board[6]).attr('boolean') === 'false'){
    alert("Old Shia is victorious!");
  }else {
    alert("Just like watching any of the Transformers films, nobody wins!");
  }
};
