// wait for the DOM to finish loading


var turn = true;



$(document).ready(function(e) {
  $('.box').one('click', function(e){

      if(turn === true){
       $(this).css('background-image', 'url("https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg")');
        $(this).text('X');
        didXWin();
        turn = false;
    }
      else {
       $(this).css('background-image', 'url("http://www.petdrugsonline.co.uk/images/page-headers/cats-master-header")');
        $(this).text('O');
        turn = true;

    }
  });


});

                        // var theFinalCountdown;      theFinalCountdown++  in if/else if statement    create if(theFinalCountdown === 8) { alert('draw!'); }

function didXWin() {
  if( $('.topLeft').text() === "X" && $('.topMiddle').text() === "X" && $('.topRight').text() === "X"          ||
      $('.middleLeft').text() === "X" && $('.middleMiddle').text() === "X" && $('.middleRight').text() === "X" ||    // X wins X  - i want to refactor this have to think harder.
      $('.bottomLeft').text() === "X" && $('bottomMiddle').text() === "X" && $('.bottomRight').text() === "X"  ||
      $('.topLeft').text() === "X" && $('.middleMiddle').text() === "X" && $('.bottomRight').text() === "X") {
        alert('OK');
      }      // Left Diagonal
                                                                                                                    //  if($('.top').text === "XXX" || $('.middle').text() === "XXX" || $('.bottom').text() === "XXX") {               This doesn't work because $(.middle).text() spits out "
                                                                                                                                                                                                                                                                                           //    O
  else if( $('.topLeft').text() === "X"   &&  $('.middleLeft').text()   === "X"  &&  $('.bottomLeft').text() === "X"   ||
           $('.topMiddle').text() === "X" &&  $('.middleMiddle').text() === "X"  &&  $('bottomMiddle').text() === "X"  ||
           $('.topRight').text() === "X"  &&  $('.middleRight').text()  === "X"  &&  $('.bottomRight').text() === "X"  ||                                                                                                                                                                  //    O
           $('.topRight').text() === "X"  &&  $('middleMiddle').text()  === "X"  &&  $('.bottomLeft').text() === "X")  {

           alert('Fixed?');

           }                                                                                                                                                          //    O



}
