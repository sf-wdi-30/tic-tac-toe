// wait for the DOM to finish loading
$(document).ready(function() {

    $(".col-md-4").on("click" , function(event) {

      alert("Draw here!");

      var boxClicked = $(this);
    });

});

//sanity check (okay!)
