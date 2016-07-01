// wait for the DOM to finish loading
alert("Sanity Check!");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    $("h1").on("click", function testClick(event){
        alert("You clicked me!");
    });
});
