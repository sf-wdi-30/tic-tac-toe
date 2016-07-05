//declartion of variables

var xIcon = ('url("img/xIcon.png")');
var oIcon = ('url("img/oIcon.png")');

//event state toggles
var turnCounter = 0;
var gameWon = 0;
var gifMode = 0;

//set starting player
var playerIcon = oIcon;

//switch player function
var playerSwitch = function() {
  if (playerIcon === xIcon) {
    playerIcon = oIcon;
  }
  else {
    playerIcon = xIcon;
  }
};

//function that checks a jQuery argument for a win condition
function checkWin(condition) {
    var testArray = [];
    condition.each(function () {
      //push attributes into an array
      testArray.push($(this).attr('title'));
    });
    var testString = testArray.toString();
    //setup variable with contents of overlay
    var overlay = jQuery('<div class="overlay"><h1 class="winnerMessage"></h1><br class="beforeImg"></div>');
    //postWin is normal procedure after win
    function postWin() {
      //prevents further clicks
      $('#board div div').addClass("filled");
      //resets turn counter
      turnCounter=0;
      //game win var set to 1
      gameWon=1;
      //clears alert display to ready for overlay
      $('.alertDisplay').text(" ");
      //adds overlay
      overlay.appendTo(document.body);
    }
    if (testString === "x,x,x") {
      postWin();
      //adds personalized win message
      $('.winnerMessage').html("JAY-Z AND PLAYER X WIN! <br><br> TAKE YOUR ASS TO RED LOBSTER!");
      //adds celebratory gif
      $( ".beforeImg" ).after("<img class='overlayGif' src='img/jayBow.gif'>");
    }
    else if (testString === "o,o,o") {
      postWin();
      $('.winnerMessage').html("WHO RUNS THE WORLD? <br><br> BEYONCÉ AND PLAYER O!");
      $( ".beforeImg" ).after("<img class='overlayGif' src='img/beyonceDance.gif'>");
    }
    else {
      //sanity check
      console.log("NOPE");
    }
  }

//function that displays players' turns
function displayTurn() {
  if (playerIcon === oIcon) {
    $('.alertDisplay').text("Player O's Turn");
  }
  else {
    $('.alertDisplay').text("Player X's Turn");
  }
}

//resets many of the variables repeated in reset calls later
function fullReset() {
  $(".overlay").remove();
  $("div").css('background-image', "");
  $("div").removeClass('filled');
  $("div").attr('title', " ");
  gameWon=0;
  turnCounter=0;
  //ensures O starts each round, because Beyonce is #1
  playerIcon = oIcon;
  displayTurn();
}

//on document load main function
$(document).ready(function() {
  //display turn to fill alertDisplay
  displayTurn();
  //reset button
  $('.reset').on('click', function(event) {
    fullReset();
  });
//I Love GIFs button
$('.gifButton').on('click', function(event) {
  if (gifMode===0) {
    fullReset();
    $('.box').css('background-size', '100%');
    oIcon = ('url("img/beyonce.gif")');
    xIcon = ('url("img/jay.gif")');
    playerIcon = oIcon;
    gifMode=1;
    $(this).html("I HATE GIFS");
  }
  else {
    fullReset();
    $('.box').css('background-size', '60%');
    oIcon = ('url("img/oIcon.png")');
    xIcon = ('url("img/xIcon.png")');
    playerIcon = oIcon;
    gifMode=0;
    $(this).html("I &#9829; GIFs");
  }
});

//draw X or O event
  $('#board').on('click', "div div", function(event) {
    //cat's game prevent further actions
    if ((($(this).hasClass('filled'))) || (turnCounter===10)) {
    }
    else {
      turnCounter += 1;
      //changes background image
      $(this).css('background-image', playerIcon);
      //mark as filled, preventing further clicks
      $(this).addClass("filled");
      //adds x or o to class and title
      if (playerIcon === (xIcon)) {
        $(this).addClass("x");
        $(this).attr('title', "x");
      }
      else {
        $(this).addClass("o");
        $(this).attr('title', "o");
      }
      //switch the player for next round
      playerSwitch(this);
      //brute force solution; I tried a dozen different methods to put this in a for loop, but jQuery refused to accept the variable
      checkWin($('.top'));
      checkWin($('.middle'));
      checkWin($('.bottom'));
      checkWin($('.left'));
      checkWin($('.center'));
      checkWin($('.right'));
      checkWin($('.diag1'));
      checkWin($('.diag2'));
      //cat's game check
      if (gameWon===1){
      }
      else {
        displayTurn();
      if (turnCounter===9) {
        $('.alertDisplay').text("It's a draw!");
      }
      }
      }
    }
  );
});
