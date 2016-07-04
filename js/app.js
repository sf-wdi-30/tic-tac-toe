// wait for the DOM to finish loading
alert("Ready? X goes first");
var boxesRow1 = [".box0", ".box3", ".box6", ".box2", ".box0", ".box0", ".box1", ".box2"]; //array of rows indexes match up as winning combos
var boxesRow2 = [".box1", ".box4", ".box7", ".box4", ".box4", ".box3", ".box4", ".box5"];
var boxesRow3 = [".box2", ".box5", ".box8", ".box6", ".box8", ".box6", ".box7", ".box8"];

function winChecker(){ // win check function made outside of engine
  for(i=0; i<9 ;i++)
    if ($(boxesRow1[i]).val() === "O" && $(boxesRow2[i]).val() === "O" && $(boxesRow3[i]).val() === "O"){
      alert("O wins!");
      return true;
    }
    else if ($(boxesRow1[i]).val() === "X" && $(boxesRow2[i]).val() === "X" && $(boxesRow3[i]).val() === "X"){
      alert("X wins!");
      return true;
    }
}
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  var turnCounter = 0; //maximum of 9 turns
  var turnAlert; // variable used for player turn alert
// optimized winChecker (now with for loop)
  $(".box").on("click", function checkBox(event){ // Main enginge logic starts here event listener user delegation? ASK!
      if ($(this).hasClass("took")){ // conditional statement that checks if square is by looking for .took HTML element
        alert("Can't move here");
      }
      else{ // else will execute if an open square is selected (houses the rest of the program)
          if (turnCounter % 2 === 0){ // nested conditional statement that adds color and value to squares
            $(this).val("X");
            $(this).text("X");
            $(this).css("color", ("blue"));
            turnAlert = "O";
            //$(this).css('background-color', ("blue"));
          }
          else if (turnCounter % 2 === 1){
            $(this).val("O");
            $(this).text("O");
            $(this).css("color", ("red"));
            turnAlert = "X";
            //$(this).css('background-color', ("red"));
          }

      //winChecker();
      if(winChecker()){ // conditional statement checking for win or draw. if either is true execution will stop
        return true;
      }
      else if(turnCounter === 8){ // if all spots are full, draw
        alert("DRAW");
      }
      
      $(this).addClass("took"); // adds took class to each HTML element
      turnCounter++;
      alert(turnAlert + "'s turn");
      }
    });

    $('.reset').on("click", function handleClick(e){ // reset button works by removing classes, values, and text
      $('.box').removeClass("took");
      $('.box').text("");
      $('.box').val("");
      $('.box').css('background-color', "white");
      turnCounter = 0;
    });
});
