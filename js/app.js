// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var $box = $(".box");

  var turn = "X";


  function changePlayer() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

  $box.on("click", function handleClick() {
      $(this).append(turn);
      changePlayer();
  });



});
