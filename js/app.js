// wait for the DOM to finish loading
alert("Sanity Check!");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

    $(".box").on("click", function testClick(event){
      var whatBox = $(this).html(); // changed so that alert tells which box is being clicked
        alert("You clicked " + whatBox);
    });
    $(".box").on("click", function insertX(e){ //adds x to each box
      $(this).append("x");
    });
});
