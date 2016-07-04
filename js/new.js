var $board;
var turn = true;
var draw = 0;


$(document).ready(function(e) {

function ok(){
  $('.box').one('click', function(e){     // alternates players

    if(turn === true){
      $(this).addClass('dog');
      $(this).text("X");
      setBoard();
      winner();
      turn = false;

    }

    else {
      $(this).addClass('cat');
      $(this).text("O");
      setBoard();
      winner();
      turn = true;
    }
   draw++;

});
}



$('.box').hover(
  function() {
    $(this).addClass('hover');     // Changes colour on hover.
  },
  function(){
    $(this).removeClass('hover');
});

  $('.ok').on('click', function reset(){       // reset button
    $board = [];
    draw = 0;

    turn = true;

   $('.box').text('');
   $('.box').removeClass('dog');
   $('.box').removeClass('cat');
   ok();     // resets one.('click')

});

});


 function setBoard() {
   $board = [  [ $('.topLeft').text(), $('.topMiddle').text(), $('.topRight').text()] ,               //Top Horizontal
               [ $('.middleLeft').text(), $('.middleMiddle').text(), $('.middleRight').text()] ,     //Middle Horizontal
               [ $('.bottomLeft').text(), $('.bottomMiddle').text(), $('.bottomRight').text()] ,    //Bottom Horizontal
               [ $('.topLeft').text(), $('.middleLeft').text(), $('.bottomLeft').text()] ,          //Left Vertical
               [ $('.topMiddle').text(), $('.middleMiddle').text(), $('.bottomMiddle').text()] ,    //Middle Vertical
               [ $('.topRight').text(), $('.middleRight').text(), $('.bottomRight').text()],        //Right Vertical
               [ $('.topLeft').text(), $('.middleMiddle').text(), $('.bottomRight').text()],        // Left to Right Diagonal
               [ $('.topRight').text(), $('.middleMiddle').text(), $('.bottomLeft').text()]            // Right to Left Diagonal
            ];
}


function winner() {
for(var i = 0; i < $board.length; i++){
    var whoWon = $board[i].toString();
      if(whoWon === "X,X,X"){
        console.log(whoWon);
        $('h3').text("Dog Wins!");

      }
      else if(whoWon === "O,O,O"){
        console.log(whoWon);
        $('h3').text("Cat wins!");

      }
      else if(draw === 8 && whoWon !== "X,X,X" && whoWon !== "O,O,O"){
        $('h3').text("Draw!");

      }
    }

}
