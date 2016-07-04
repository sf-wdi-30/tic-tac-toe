// wait for the DOM to finish loading

var checkForClass = function(array, x) {
  $(array).is(x);
};


// var checkClass = function(array) {
//   return array.is('.x');
// };
// var checkClass = function(array) {
//   return ($('.top').is('.x'));
// };

var topArray = $('.top');
//
var test2 = function() {
  for (i=0; i<($('.top').length-1); i++) {
  console.log(checkClass(topArray[i]));
}
};
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
};

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
  }
  else {
    $(this).addClass("o");
  }
  playerSwitch(this);
}
  // $(this).css('background-color', 'blue');
  //   %(this).attr()
});
});
