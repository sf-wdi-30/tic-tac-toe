// wait for the DOM to finish loading
alert("Sanity Check!");
var boxesRow1 = [".box0", ".box3", ".box6"];
var boxesRow2 = [".box1", ".box4", ".box7"];
var boxesRow3 = [".box2", ".box5", ".box28"];

$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  var turnCounter = 0; //maximum of 9 turns
// optimized win checker now with for loop
  function winChecker(){ // function made outside of enginge
    for(i=0; i<9 ;i++)
      if ($(boxesRow1[i]).val() === "O" && $(boxesRow2[i]).val() === "O" && $(boxesRow3[i]).val() === "O"){
        alert("O wins!");
      }
  }

  $(".box").on("click", function checkBox(event){ // Main enginge logic starts here event listener user delegation? ASK!
      if ($(this).hasClass("took")){ // conditional statement that checks if square is taken
        alert("Can't move here");
      }
      else{ // else will execute if an open square is selected (houses the rest of the program)
          if (turnCounter % 2 === 0){ // nested conditional statement that adds color and value to squares
            $(this).val("X");
            $(this).text("X");
            $(this).css("color", ("blue"));
            winChecker();
            alert("O's turn");
            //$(this).css('background-color', ("blue"));
          }
          else if (turnCounter % 2 === 1){
            $(this).val("O");
            $(this).text("O");
            $(this).css("color", ("red"));
            winChecker();
            alert("X's turn");
            //$(this).css('background-color', ("red"));
          }
      $(this).addClass("took");
      turnCounter++;
        // if((turnCounter%2) === 1){  // conditional statement that alerts which player's turn it is
        //   alert("O's turn");
        // }
        // else{
        //   alert("X's turn");
        // }

      }
    });
    $('.reset').on("click", function handleClick(e){ // reset button works by removing classes
      $('.box').removeClass("took");
      $('.box').text("");
      $('.box').val("");
      $('.box').css('background-color', "white");
      turnCounter = 0;
    });
});



// checking for winner
      // if ($(".1stbox").val() === "o" && $(".2ndbox").val() === "o" && $(".3rdbox").val() === "o"){ // ask ryan
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".4thbox").val() === "o" && $(".5thbox").val() === "o" && $(".6thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".7thbox").val() === "o" && $(".8thbox").val() === "o" && $(".9thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".1stbox").val() === "o" && $(".4thbox").val() === "o" && $(".7thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".2ndbox").val() === "o" && $(".5thbox").val() === "o" && $(".8thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".3rdbox").val() === "o" && $(".6thbox").val() === "o" && $(".9thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".1stbox").val() === "o" && $(".5thbox").val() === "o" && $(".9thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".3rdbox").val() === "o" && $(".5thbox").val() === "o" && $(".7thbox").val() === "o"){
      //   alert("o wins!");
      //   return false;
      // }
      // else if ($(".1stbox").val() === "x" && $(".2ndbox").val() === "x" && $(".3rdbox").val() === "x"){ // ask ryan
      //   alert("x wins!");
      //   return false;
      // }
      // else if ($(".4thbox").val() === "x" && $(".5thbox").val() === "x" && $(".6thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".7thbox").val() === "x" && $(".8thbox").val() === "x" && $(".9thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".1stbox").val() === "x" && $(".4thbox").val() === "x" && $(".7thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".2ndbox").val() === "x" && $(".5thbox").val() === "x" && $(".8thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".3rdbox").val() === "x" && $(".6thbox").val() === "x" && $(".9thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".1stbox").val() === "x" && $(".5thbox").val() === "x" && $(".9thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if ($(".3rdbox").val() === "x" && $(".5thbox").val() === "x" && $(".7thbox").val() === "x"){
      //   alert("x wins!");
      // }
      // else if (turnCounter === 9){
      //   alert("Draw!");
      // }
