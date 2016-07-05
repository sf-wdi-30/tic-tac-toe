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

  //on click
  $gridSpace.on("click", function(){
    var $selectBox = $(this);
    //if box is empty, then move onto the if statement
    if($selectBox.html()==="") {
      //if turnCount is even, it's 'x's turn and appends tacoCat picture
      if (turnCount % 2 === 0) {
        playingNow = 'x';
        $selectBox.append(tacoCat);
      } else {
        //if turnCount is odd, leaving a remainder, then it's 'o's turn and appends pizzaCat picture
        playingNow = 'o';
        $selectBox.append(pizzaCat);
      }
      //also adds a new class of 'x' or 'o'
      $selectBox.addClass(playingNow);
      turnCount++;
      //if box is occupied, alerts that another cat is in the place
    } else if ($selectBox.html()!=="") {
      alert ('occupied by another cat');
    }
    //indexes which position was clicked
    var indexOfBox = $('.box').index($(this));
    var currentBox = occupiedPosition[playingNow];
    //stores the indexed position into the hash table
    currentBox.push(indexOfBox);
    console.log(currentBox);
    //iterates through each winPosition upon each click and compares to the hash table, but PROBLEM is that it seems that the two arrays aren't being properly compared thus cannot determine winner
    for (var i=0; i<9; i++) {
      if (currentBox===winPositions[i]) {
        alert (playingNow + ' is the winner!');
      }
    }
  });

  //logic to determine winner
  //Record player's choice -> match to the winning combination -> if match then win



  // New Game
  $('.reset').on("click", function(){
    $('.btn').append('');
  });
});
