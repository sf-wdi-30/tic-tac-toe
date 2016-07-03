var $board;
var whoWon;
var turn = true;
var draw = 0;



$(document).ready(function(e) {

  $('.box').one('click', function(e){

    if(turn === true){
      $(this).addClass('dog');
      $(this).text("X");
      setBoard();
      winner();
      turn = false;

    }

    else {
      $(this).addClass('cat');
      $(this).text("0");
      setBoard();
      winner();
      turn = true;
    }
   draw++;

});

  $('.box').hover(
    function() {
      $(this).addClass('hover');     // Changes colour on hover.
    },
    function(){
      $(this).removeClass('hover');
    }
  );






});
 function setBoard() {
   $board = [  [ $('.topLeft').text(), $('.topMiddle').text(), $('.topRight').text()] ,               //Top Horizontal
               [ $('.middleLeft').text(), $('.middleMiddle').text(), $('.middleRight').text()] ,     //Middle Horizontal
               [ $('.bottomLeft').text(), $('.bottomMiddle').text(), $('.bottomRight').text()] ,    //Bottom Horizontal
               [ $('.topLeft').text(), $('.middleLeft').text(), $('.bottomLeft').text()] ,          //Left Vertical
               [ $('.topMiddle').text(), $('.middleMiddle').text(), $('.bottomMiddle').text()] ,    //Middle Vertical
               [ $('.topRight').text(), $('.middleRight').text(), $('.bottomRight').text()],        //Right Vertical
               [ $('.topLeft').text(), $('.middleMiddle').text(), $('.bottomRight').text()],        // Diagonal
               [ $('.topRight').text(), $('.middleMiddle').text(), $('.topLeft').text()]            // Diagonal
            ];
}

function winner() {
for(var i = 0; i < $board.length; i++){
    var okay = $board[i].toString();
      if(okay === "X,X,X"){
        $('h3').text("Dog Wins!");
      }
    }

}
