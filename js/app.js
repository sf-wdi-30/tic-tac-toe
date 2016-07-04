// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("JS is linked to html!");

  $(".box").on("click", function handleClick(event) {
    if ($(this).html()==='') {
      $(this).addClass('checked');
      $(this).html(turn);
      nextTurn();
    }
    else {
      alert("box is filled!"); // problem: once first box is clicked, alerts even when clicked for the first time
    }
  });

});

// possible way to set up board
var $boxes = $(".box");
var $box1 = $boxes.eq(0);
var $box2 = $boxes.eq(1);
var $box3 = $boxes.eq(2);
var $box4 = $boxes.eq(3);
var $box5 = $boxes.eq(4);
var $box6 = $boxes.eq(5);
var $box7 = $boxes.eq(6);
var $box8 = $boxes.eq(7);
var $box9 = $boxes.eq(8);

var turn = '';
function nextTurn() {
  if (turn==='x') {
    turn = 'o';
  } else {
    turn = 'x';
  }
}

// winning game logic
function checkThreeBoxes(player, boxOne, boxTwo, boxThree) {
  return (boxOne === player) && (boxTwo === player) && (boxThree === player);
} // takes html of 3 boxes as args to check

// attempt to insert img
// var img = new Image();
// var insertImg = $('.box').on("click", function() {
//   $(this).append(img);
// });
// img.src = 'https://upload.wikimedia.org/wikipedia/en/d/d0/JaketheDog.png';
