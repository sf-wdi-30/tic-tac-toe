// wait for the DOM to finish loading
alert("Sanity Check!");
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  var turnCounter = 0; //maximum of 9 turns

  $(".box").on("click", function checkBox(event){
      if ($(this).hasClass("took")){ // conditional statement that checks if square is taken
        alert("Can't move here");
      }
      else{ // else will execute if an open square is selected
          if (turnCounter % 2 === 0){ // nested conditional statement that adds color and value to squares
            $(this).val("x");
            $(this).text("x");
            $(this).css('background-color', ("blue"));
          }
          else if (turnCounter % 2 === 1){
            $(this).val("o");
            $(this).text("o");
            $(this).css('background-color', ("red"));
          }
      $(this).addClass("took");
      turnCounter++;
        if((turnCounter%2) === 1){
          alert("O's turn");
        }
        else{
        alert("X's turn")
        }
      }
// checking for winner
      if ($(".1stbox").val() === "o" && $(".2ndbox").val() === "o" && $(".3rdbox").val() === "o"){ // ask ryan
        alert("o wins!");
      }
      else if ($(".4thbox").val() === "o" && $(".5thbox").val() === "o" && $(".6thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".7thbox").val() === "o" && $(".8thbox").val() === "o" && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".1stbox").val() === "o" && $(".4thbox").val() === "o" && $(".7thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".2ndbox").val() === "o" && $(".5thbox").val() === "o" && $(".8thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".3rdbox").val() === "o" && $(".6thbox").val() === "o" && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".1stbox").val() === "o" && $(".5thbox").val() === "o" && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".3rdbox").val() === "o" && $(".5thbox").val() === "o" && $(".7thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".1stbox").val() === "x" && $(".2ndbox").val() === "x" && $(".3rdbox").val() === "x"){ // ask ryan
        alert("x wins!");
      }
      else if ($(".4thbox").val() === "x" && $(".5thbox").val() === "x" && $(".6thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".7thbox").val() === "x" && $(".8thbox").val() === "x" && $(".9thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".1stbox").val() === "x" && $(".4thbox").val() === "x" && $(".7thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".2ndbox").val() === "x" && $(".5thbox").val() === "x" && $(".8thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".3rdbox").val() === "x" && $(".6thbox").val() === "x" && $(".9thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".1stbox").val() === "x" && $(".5thbox").val() === "x" && $(".9thbox").val() === "x"){
        alert("x wins!");
      }
      else if ($(".3rdbox").val() === "x" && $(".5thbox").val() === "x" && $(".7thbox").val() === "x"){
        alert("x wins!");
      }
      else if (turnCounter === 9){
        alert("Draw!");
      }
    });
});
