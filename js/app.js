// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("JS is linked to html!");

  $('#message').text("Current player is: X");

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
  $('#board').append('<input type="reset" value="Reset">').addClass('text-center');


});

// set variable for all jQuery boxes
var $boxes = $('.box');
// set event listener to handle reset button
$('input').on("click", function handleReset(event) {
  $('.box').each(function() {
    $(this).html('');
  });
});

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
function startGame() {
  player = 'X';
} // set player

// switch player
function nextTurn() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  // console.log("player is: " + player);
  $('#message').text("Current player is: " + player);
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


function checkAllRows() {
  for (var i = 0; i < rowsOfBoxes.length; i++) {
    if (allThreeEqual(player, rowsOfBoxes[i])) {
      return true;
    }
    console.log(i);
  }
  return false;
}
allThreeEqual('X', rowsOfBoxes[2]);

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
