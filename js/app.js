// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

});

var turn = true;

$('.box').one('click', function(e){

    if(turn === true){
      $(this).css('background-image', 'url("https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg")');
      $(this).text('X');
      didIWin();
      turn = false;
    }
    else {
      $(this).css('background-image', 'url("http://www.petdrugsonline.co.uk/images/page-headers/cats-master-header")');
      $(this).text('O');
      turn = true;

  }
});


function didIWin() {
if($('.topLeft').text() === "X" && $('.topMiddle').text() === "X" && $('.topRight').text() === "X") {
  alert('WOW');
}
}
