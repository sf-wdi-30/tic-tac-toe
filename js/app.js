// wait for the DOM to finish loading
$(document).ready(function() {

var player = 1;

//clicked on square
  $(".col-md-4").on("click", function(event) {

    var boxClicked = $(this);

//alternate turns and determine if box is taken
//Symbols: 'ex' and oh'
      if(boxClicked.hasClass('ex') || boxClicked.hasClass('oh')) {
          alert("This box is taken!");
      } else {
          if(player === 1) {
            boxClicked.addClass("ex");
            player = 2;
         } else {
            boxClicked.addClass("oh");
            player = 1;
           }

      }
    });
//Check if someone won?--- create function that checks symbol X or O? ('ex' and 'oh')...
//list ALL winning possibilities? (check to see if works)
//horizontal rows
  function checkWin(symbol) {
    if($("#1").hasClass(symbol) && $("#2").hasClass(symbol) && $("#3").hasClass(symbol)) {
      return true;

    } else if ($("#4").hasClass(symbol) && $("#5").hasClass(symbol) && $("#6").hasClass(symbol)) {
      return true;

    } else if ($("#7").hasClass(symbol) && $("#8").hasClass(symbol) && $("#9").hasClass(symbol)) {
    } else {
        return false;
    }

  }




    });
