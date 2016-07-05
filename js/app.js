// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("JS is linked to html!");
  startGame();
  $(".box").on("click", function handleClick(event) {
    if ($(this).html()==='') {
      $(this).addClass('checked');
      $(this).html(player);
      nextTurn();
    }
    else {
      alert("box is filled!");
    }
  });

});

var $boxes = $('.box');
var $box0 = $boxes.eq(0);
var $box1 = $boxes.eq(1);
var $box2 = $boxes.eq(2);

var $box3 = $boxes.eq(3);
var $box4 = $boxes.eq(4);
var $box5 = $boxes.eq(5);
var $box6 = $boxes.eq(6);
var $box7 = $boxes.eq(7);
var $box8 = $boxes.eq(8);

var player = '';
var turnCounter = 0;
function startGame() {
  player = 'x';
} // set player

// switch player
function nextTurn() {
  if (player === 'x') {
    player = 'o';
    turnCounter++;
  } else {
    player = 'x';
    turnCounter++;
  }
  console.log("player is: " + player);
  console.log("turns: " + turnCounter);
}

function allThreeEqual(player, boxSet) {
  // console.log(boxSet[0].html(), player);
  return (boxSet[0].html()===player) && (boxSet[1].html()===player) && (boxSet[2].html()===player);
}

// var foo = $boxes.eq(0).html();
// var bar = $boxes.eq(1).html();
// var baz = $boxes.eq(2).html();

var rowsOfBoxes = [[$boxes.eq(0), $boxes.eq(1), $boxes.eq(2)],
                   [$boxes.eq(3), $boxes.eq(4), $boxes.eq(5)],
                   [$boxes.eq(6), $boxes.eq(7), $boxes.eq(8)]];

// TODO: Write a function that for each boxSet in rowsOfBoxes
//       returns true if any of the boxSets have allThreeEqual to the player.
// HINT: You'll need a loop.

function checkAllRows() {
  for (var i = 0; i < rowsOfBoxes.length; i++) {
    if (allThreeEqual(player, rowsOfBoxes[i])) {
      return true;
    }
    console.log(i);
  }
  return false;
}
allThreeEqual('x', rowsOfBoxes[2]);

// **** check if first box's html is equal to player
// function checkAgainstPlayer(player) {
//   return $boxes.eq(0).html()===player;
// }

// check if each box in $boxes has html equal to player
var $firstRowBoxes = $('.box').slice(0,3);

$firstRowBoxes.each(function(i) {
  // if ($boxes.eq(i).html()===player);
  console.log($firstRowBoxes.eq(i).html());
});
