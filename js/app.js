// wait for the DOM to finish loading
$(document).ready(function() {

//Which player is currently going?

var player = 1;

//clicked on square
    $(".col-md-4").on("click" , function(event) {

      alert("Draw here!");
      var boxClicked = $(this);
//determine if there is element in box
      if(boxClicked.hasClass('ex') || boxClicked.hasClass('oh')) {
          alert('This square has already been clicked.');}
          
      }

    });

});

//sanity check (okay!)
