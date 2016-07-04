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
        alert("X Wins");
        }
        else if (testString === "o,o,o") {
        alert("Y Wins");
        }
        else {
        console.log("NOPE");
        }
}
//**
// FOR LATER: RETURN A FUNCTION INSTEAD OF ALERT win(x) or win(y)
//**

winConditions = ["$(.'top')",
// ".'middle'", ".'bottom'", "'left'", "'center'", "'right'", "'diag1'", "'diag2'"
];

var xIcon = ('url("img/xIcon.png")');
var oIcon = ('url("img/oIcon.png")');
//set starting player
var playerIcon = oIcon;
// //test
// var topRow = $('.top').hasClass();
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

  //reset button
  $('button').on('click', function(event) {
    $("div").css('background-image', "");
    $("div").removeClass('filled');
  });

//draw event
  $('#board').on('click', "div div", function(event) {
    if ($(this).hasClass('filled')) {
    }
      else {
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
  checkWin($('.top'));
  // for (var i = 0; i < winConditions.length; i++) {
  //     checkWin(winConditions[i]);
  // }
  console.log("done");
}
});
});

// $(this).css('background-color', 'blue');
//   %(this).attr()
