// wait for the DOM to finish loading
$(document).ready(function() {

var player = 1;

//clicked on square
  $(".col-md-4").on("click", function(event) {

    var boxClicked = $(this);

//alternate turns and determine if box is taken
//Symbols: 'ex' and oh'
      if(boxClicked.hasClass("ex") || boxClicked.hasClass("oh")) {
          alert("This box is taken!");
      } else {
          if(player === 1) {
            boxClicked.addClass("ex"); //player X
            if (checkWin("ex")) {
                alert("Winner!");
            } else {
              player = 2;
              }
          } else {
            boxClicked.addClass("oh"); //player O
            if (checkWin("ex")) {
                alert("Winner!");
            } else {
              player = 1; //if not won.. pass to player 1... (does this make sense?)
           }
         }
      }
    });
//Check if someone won?--- create function that checks symbol X or O? ('ex' and 'oh')...
//list ALL winning possibilities? (check to see if works)
//Horizontal
  function checkWin(symbol) {
    if($("#1").hasClass(symbol) && $("#2").hasClass(symbol) && $("#3").hasClass(symbol)) {
      return true;

    } else if ($("#4").hasClass(symbol) && $("#5").hasClass(symbol) && $("#6").hasClass(symbol)) {
      return true;

    } else if ($("#7").hasClass(symbol) && $("#8").hasClass(symbol) && $("#9").hasClass(symbol)) {
    } else {
//Vertical
    }if($("#1").hasClass(symbol) && $("#4").hasClass(symbol) && $("#7").hasClass(symbol)) {
      return true;

    }  else if ($("#2").hasClass(symbol) && $("#5").hasClass(symbol) && $("#8").hasClass(symbol)) {
      return true;

    } else if ($("#3").hasClass(symbol) && $("#6").hasClass(symbol) && $("#9").hasClass(symbol)) {
    } else {
//Diagonals
    }if($("#1").hasClass(symbol) && $("#5").hasClass(symbol) && $("#9").hasClass(symbol)) {
      return true;

    }  else if ($("#3").hasClass(symbol) && $("#5").hasClass(symbol) && $("#7").hasClass(symbol)) {
      return true;
    } else {

      return false;
    }
  }
//Refresh Button
  $("button").on("click", function(){
      location.reload();
    });

});
