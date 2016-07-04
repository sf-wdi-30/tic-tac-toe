// wait for the DOM to finish loading
$(document).ready(function() {

var player = 1;

//clicked on square
    $(".col-md-4").on("click", function(event) {

      var boxClicked = $(this);

//alternate turns and determine if box is taken
      if(boxClicked.hasClass('ex') || boxClicked.hasClass('oh')) {
          alert("This box is taken!");
      } else {
          if(player === 1) {
            boxClicked.addClass('ex');
            player = 2;
         } else {
            boxClicked.addClass('oh');
            player = 1;
          }

          }

      });

    });
