// wait for the DOM to finish loading

var turn = true;
var finalCountDown = 0;
var oWins = false;
var xWins = false;

$(document).ready(function(e) {

  $('.box').one('click', function(e){

    if(turn === true){
      $(this).css('background-image', 'url("https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg")');
      $(this).text('X');
      didXWin();
      draw();
      turn = false;
      finalCountDown += 1;    // do ~ do ~ do ~ dooo ~ do ~ do ~ do ~ do ~ dooo

    }

    else {

      $(this).css('background-image', 'url("http://www.petdrugsonline.co.uk/images/page-headers/cats-master-header")');
      $(this).text('O');
      didOWin();
      draw();
      turn = true;
      finalCountDown += 1;     // do ~ do ~ do ~ dooo ~ do ~ do ~ do ~ do ~ dooo
    }
  });

});

function didXWin() {
  if( $('.topLeft').text() === "X"    &&  $('.topMiddle').text() === "X"    &&  $('.topRight').text() === "X"     ||    // broke them into 2 because i wanted my win messages to say "X wins Horizontally etc."
      $('.middleLeft').text() === "X" &&  $('.middleMiddle').text() === "X" &&  $('.middleRight').text() === "X"  ||    // X wins X  - i want to refactor this have to think harder.
      $('.bottomLeft').text() === "X" &&  $('.bottomMiddle').text() === "X"  &&  $('.bottomRight').text() === "X"  ||
      $('.topLeft').text() === "X"    &&  $('.middleMiddle').text() === "X" &&  $('.bottomRight').text() === "X") {    // X diagonal

        console.log('boo');
        xWins = true;
      }

                                                                                                                                                                                                                                                                                           //    O
  else if( $('.topLeft').text() === "X"   &&  $('.middleLeft').text()   === "X"  &&  $('.bottomLeft').text() === "X"   ||
           $('.topMiddle').text() === "X" &&  $('.middleMiddle').text() === "X"  &&  $('.bottomMiddle').text() === "X"  ||   // X wins Y
           $('.topRight').text() === "X"  &&  $('.middleRight').text()  === "X"  &&  $('.bottomRight').text() === "X"  ||                                                                                                                                                                  //    O
           $('.topRight').text() === "X"  &&  $('.middleMiddle').text()  === "X"  &&  $('.bottomLeft').text() === "X")  {    // X diagonal


           console.log('boo');
           xWins = true;
           }
}

function didOWin() {
  if( $('.topLeft').text() === "O"    &&  $('.topMiddle').text() === "O"    &&  $('.topRight').text() === "O"      ||
      $('.middleLeft').text() === "O" &&  $('.middleMiddle').text() === "O" &&  $('.middleRight').text() === "O"   ||    // O wins X  - i want to refactor this have to think harder.
      $('.bottomLeft').text() === "O" &&  $('.bottomMiddle').text() === "O"  &&  $('.bottomRight').text() === "O"   ||
      $('.topLeft').text() === "O"    &&  $('.middleMiddle').text() === "O" &&  $('.bottomRight').text() === "O")  {    // O diagonal
      console.log('boo');
      oWins = true;
   }

                                                                                                                                                                                                                                                                                           //    O
  else if( $('.topLeft').text() === "O"   &&  $('.middleLeft').text()   === "O"  &&  $('.bottomLeft').text() === "O"   ||  // O wins Y
           $('.topMiddle').text() === "O" &&  $('.middleMiddle').text() === "O"  &&  $('.bottomMiddle').text() === "O"  ||
           $('.topRight').text() === "O"  &&  $('.middleRight').text()  === "O"  &&  $('.bottomRight').text() === "O"  ||                                                                                                                                                                  //    O
           $('.topRight').text() === "O"  &&  $('.middleMiddle').text()  === "O"  &&  $('.bottomLeft').text() === "O")  {    // O diagonal

           console.log('boo');
           oWins = true;
  }


}

function draw(){
  if (finalCountDown === 8 && xWins === false && oWins === false){
    alert('DRAW');
  }
}
