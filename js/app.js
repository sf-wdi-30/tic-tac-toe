// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("JS is linked to html!");
});


// possible way to set up board
var boxes = $(".box");
var firstBox = boxes.eq(0);
var secondBox = boxes.eq(1);
