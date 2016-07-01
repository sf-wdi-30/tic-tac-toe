console.log("frommmmmmmmmm Chicago");
//alert("I am an alert box!");
// wait for the DOM to finish loading
$(document).ready(function() {

    $('.col-md-4 box').on("click", function handleClick(e) {
      $(this).alert("It works!");
    });

  // all code to manipulate the DOM
  // goes inside this function

});
