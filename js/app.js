// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

// Variables
  var turnCount = 0;
  var tacoCat = '<img src="tacocat.png" height="150px" width="150px">';
  var pizzaCat = '<img src="pizzacat.png" height="150px" width="150px">';
  var $gridSpace = $('.box');
  var winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  var occupiedPosition = {
    'x': [],
    'o': []
  };


  var playingNow = 'x';


  $gridSpace.on("click", function(){
    var $selectBox = $(this);
    if($selectBox.html()==="") {
      if (turnCount % 2 === 0) {
        playingNow = 'x';
        $selectBox.append(tacoCat);
      } else {
        playingNow = 'o';
        $selectBox.append(pizzaCat);
      }
      $selectBox.addClass(playingNow);
      turnCount++;
    } else if ($selectBox.html()!=="") {
      alert ('occupied by another cat');
    }
    var indexOfBox = $('.box').index($(this));
    // alert (indexOfBox);
    var currentBox = occupiedPosition[playingNow];
    currentBox.push(indexOfBox);
    // alert (console.log(occupiedPosition));
  });
  //
  // Record player's choice -> match to the winning combination -> if match then win



  // New Game
  $('.reset').on("click", function(){
    $('.btn').append('');
  });
});
