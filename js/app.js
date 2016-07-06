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
    $(this).css( "background-image" , 'url("img/shark.jpg")' );
    checkWin();
    }
  else if (playerTurn % 2 === 1) {
    $(this).val("o");
    $(this).text("o");
    $(this).css( "background-image" , 'url("img/seal.jpg")' );
    checkWin();
    }
  }
    $(this).addClass("took");
    playerTurn++;
  });

  function checkWin() {
        if ($(".1st").val() === "o" && $(".2nd").val() === "o" && $(".3rd").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".4th").val() === "o" && $(".5th").val() === "o" && $(".6th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".7th").val() === "o" && $(".8th").val() === "o" && $(".9th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".1st").val() === "o" && $(".4th").val() === "o" && $(".7th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".2nd").val() === "o" && $(".5th").val() === "o" && $(".8th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".3rd").val() === "o" && $(".6th").val() === "o" && $(".9th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".1st").val() === "o" && $(".5th").val() === "o" && $(".9th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".3rd").val() === "o" && $(".5th").val() === "o" && $(".7th").val() === "o"){
          alert("Seal Wins!");
        }
        else if ($(".1st").val() === "x" && $(".2nd").val() === "x" && $(".3rd").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".4th").val() === "x" && $(".5th").val() === "x" && $(".6th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".7th").val() === "x" && $(".8th").val() === "x" && $(".9th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".1st").val() === "x" && $(".4th").val() === "x" && $(".7th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".2nd").val() === "x" && $(".5th").val() === "x" && $(".8th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".3rd").val() === "x" && $(".6th").val() === "x" && $(".9th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".1st").val() === "x" && $(".5th").val() === "x" && $(".9th").val() === "x"){
          alert("Shark Wins!");
        }
        else if ($(".3rd").val() === "x" && $(".5th").val() === "x" && $(".7th").val() === "x"){
          alert("Shark Wins!");
        }
        else if (playerTurn === 9){
          alert("Draw!");
        }
    }



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
