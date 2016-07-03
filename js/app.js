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
    $(this).css( "background-color" , "green" );
    }
  else if (playerTurn % 2 === 1) {
    $(this).val("o");
    $(this).text("o");
    $(this).css( "background-color" , "yellow" );
    }
  }
    $(this).addClass("took");
    playerTurn++;
  });
});
