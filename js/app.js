$(document).ready(function() {

 var playerTurn = 0; // 9 turns in all

 $(".box").click(function testBox(event) {
   if ($(this).hasClass("took")){
     alert("No Moves Here!");
   }
else{
  if ( playerTurn % 2 === 0 ){
    $(this).val("x");
    $(this).text("x");
    $(this).css( "background-image" , 'url("img/tattoofail.jpg")' );
    }
  else if (playerTurn % 2 === 1) {
    $(this).val("o");
    $(this).text("o");
    $(this).css( "background-image" , 'url("img/birdstransparent.jpg")' );
    }
  }
    $(this).addClass("took");
    playerTurn++;
  });




////////reset button ////
$(".btn").on('click', function(event) {
  $(".box").each (function (event) {
     $(this).html(' ');
     $(this).css('background-image' , 'none');
     $(this).removeClass("took");
   });
 });
///////////////



});
