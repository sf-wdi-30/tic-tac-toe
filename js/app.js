// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("JS is linked to html!");

  // create default message text
  $('#message').text("Current player is: " + player);

  // create event listener for box click
  $(".box").on("click", function handleClick(event) {
    if ($(this).html()==='') {
      $(this).addClass('checked');
      $(this).html(player);
      switchPlayer();
    }
    else {
      alert("box is filled!");
    }
  });

  $('#board').append('<input type="reset" value="Reset">').addClass('text-center');
  // set event listener to handle reset button
  $('input').on("click", function handleReset(event) {
    $('.box').each(function() {
      $(this).html('');
      $(this).removeClass('checked');
    });
    player = 'X';
    $('#message').text("Current player is: " + player);
  });
});

var player = 'X';

// set variable for all jQuery boxes
var $boxes = $('.box');

// switch player
function switchPlayer() {
  if (player === 'X') {
    player = 'O';
  } else if (player === 'O'){
    player = 'X';
  } else {
    alert("Something went wrong! No such player as " + player);
  }
  $('#message').text("Current player is: " + player);
}

function allThreeEqual(player, boxSet) {
  return (boxSet[0].html()===player) && (boxSet[1].html()===player) && (boxSet[2].html()===player);
}

var rowsOfBoxes = [[$boxes.eq(0), $boxes.eq(1), $boxes.eq(2)],
                   [$boxes.eq(3), $boxes.eq(4), $boxes.eq(5)],
                   [$boxes.eq(6), $boxes.eq(7), $boxes.eq(8)],];

function checkAllRows() {
  for (var i = 0; i < rowsOfBoxes.length; i++) {
    if (allThreeEqual(player, rowsOfBoxes[i])) {
      return true;
    }
  }
  return false;
}
