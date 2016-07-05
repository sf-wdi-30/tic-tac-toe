// wait for the DOM to finish loading

//TEST
// var checkClass = function(b) {
//   console.log(b.is('.x'));
// };
//
// var topArray=[];
// var arrayCreator = function() {
//   for (i=0; i<($('.top').length-1); i++) {
//   topArray.push(checkClass(topArray[i]));
// }
// };



//THIS WORKS
//
// var checkClass = function(array) {
//   return ($('.top').is('.x'));
// };
//
// var topArray=[];
// var arrayCreator = function() {
//   for (i=0; i<($('.top').length-1); i++) {
//   topArray.push(checkClass(topArray[i]));
// }
// };

//THIS WORKS


// var winCheck = function() {
//   if ("x"===$('#top-left').attr('title')) {
//       console.log('cool');
//     }
//     else {
//       console.log('not cool');
//     }
// };
// var checkForClass = function(array, x) {
//   $(array).is(x);
// };
//
// var checkClass = function(array) {
//   return array.is('.x');
// };

// var topArray = $('.top');
//

// $.each($('.top'), function( key, value ) {


// var test2 = function() {
// $.each($('.top'), function( key, value ) {
//   console.log(checkClass());
// });
// };

// var test = function() {
//   jQuery.each($('.top'), checkClass() );
// };
//
// var checkWin = function(top) {
//   $.each(top, checkForClass());
//   //   .hasClass( "bar" )
  // }
// $(stuff)each.hasClass( "foo" );
// $(stuff).hasClass( "bar" )
// };
//
// var test = function() {
//  $('.top').each($('.top').attr('title'));
// };
//
// var winCheck = function() {
//   $('.top').attr('title');
// };
// myArray=[];
// // var test3 = $.each($('.top').myArray.push.attr('title'));
// var top = $('.top');

// function test4() {
//     $('.top').each(function () {
//       var testArray = [];
//     testArray.fill($(this).attr('title'), 0);
//     console.log(testArray);
//     });
//
// }

// function test4() {
//     $('.top').each(function () {
//         var testdata = $(this).attr('title');
//         //$(this).val(testdata);
//         console.log(testdata);
//     });
//
// }

// var test3 = function () {
//   jQuery.each(($('.top').attr('title')), function(index, value) {
//       console.log('element at index ' + $(index).attr('title') + ' is ' + value);
//     });
// } ;

// var test3 = function () {
//   jQuery.each(($('.top')), function(index, value) {
//       console.log('element at index ' + $(index).attr('title') + ' is ' + value);
//     });
// } ;
//
// var test3 = function () {
//   jQuery.each(($('.top')), function(index, value) {
//       console.log('element at index ' + index + ' is ' + value);
//     });
// } ;

// jQuery.each(($('.top')), function(index, value) {
//     console.log('element at index ' + index + ' is ' + value);
// });

function checkWin(condition) {
    var testArray = [];
    condition.each(function () {
        testArray.push($(this).attr('title'));
      });
        var testString = testArray.toString();
        if (testString === "x,x,x") {
        $('#board div div').addClass("filled");
        // alert("X Wins");
        turnCounter=0;
        gameWon=1;
        $('.alertDisplay').text("Player X Wins!");
        }
        else if (testString === "o,o,o") {
        $('#board div div').addClass("filled");
        // alert("O Wins");
        turnCounter=0;
        gameWon=1;
        $('.alertDisplay').text("Player O Wins!");
        }
        else {
        console.log("NOPE");
        }
}
//**
// FOR LATER: RETURN A FUNCTION INSTEAD OF ALERT win(x) or win(y)
//**

function displayTurn() {
  if (playerIcon === oIcon) {
    $('.alertDisplay').text("Player O's Turn");
  }
  else {
    $('.alertDisplay').text("Player X's Turn");
  }
}


// function checkFull {
//   $('#board div div')
//   if ($(this).hasClass('filled'))
// }


// failed experiment with for loop for iterating on winCondition();
// winConditions = ["$(.'top')",
// // ".'middle'", ".'bottom'", "'left'", "'center'", "'right'", "'diag1'", "'diag2'"
// ];

var xIcon = ('url("img/xIcon.png")');
var oIcon = ('url("img/oIcon.png")');
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

$(document).ready(function() {
displayTurn();

  //reset button
  $('.reset').on('click', function(event) {
    $("div").css('background-image', "");
    $("div").removeClass('filled');
    $("div").attr('title', " ");
    gameWon=0;
    turnCounter=0;
    displayTurn();
  });
//I Love GIFs button
$('.gifButton').on('click', function(event) {
  if (gifMode===0) {
    console.log(gifMode);
  $("div").css('background-image', "");
  $("div").removeClass('filled');
  $("div").attr('title', " ");
  gameWon=0;
  turnCounter=0;
  displayTurn();
  $('.box').css('background-size', '100%');
  oIcon = ('url("img/beyonce.gif")');
  xIcon = ('url("img/jay.gif")');
  gifMode=1;
  playerIcon = oIcon;
  $(this).html("I HATE GIFS");
  }
    else {
    console.log(gifMode);
  $("div").css('background-image', "");
  $("div").removeClass('filled');
  $("div").attr('title', " ");
  gameWon=0;
  turnCounter=0;
  displayTurn();
  $('.box').css('background-size', '60%');
  oIcon = ('url("img/oIcon.png")');
  xIcon = ('url("img/xIcon.png")');
  playerIcon = oIcon;
  gifMode=0;
  $(this).html("I &#9829; GIFs");
  }
});

//draw event
  $('#board').on('click', "div div", function(event) {
    if ((($(this).hasClass('filled'))) || (turnCounter===10)) {
    }
    else {
  turnCounter += 1;
  $(this).css('background-image', playerIcon);
  $(this).addClass("filled");
  if (playerIcon === (xIcon)) {
    $(this).addClass("x");
    $(this).attr('title', "x");
  }
  else {
    $(this).addClass("o");
    $(this).attr('title', "o");
  }
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
  console.log(turnCounter);
  if (gameWon===1){
    console.log("test");
  }
  else {
    displayTurn();
  if (turnCounter===9) {
    alert("Cat's Game!");
  }
}
  console.log("done");
}
}
);
});

// $(this).css('background-color', 'blue');
//   %(this).attr()
