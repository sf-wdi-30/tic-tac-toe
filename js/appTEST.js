// wait for the DOM to finish loading

$(document).ready(function() {
  //set icon for x or o
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

  var checkWin = function() {
    console.log('help');
  };

  //win function
  // var checkWin = function(stuff) {
  //   console.log('help');
  //   stuff.each(hasClass( "x" ));
  // };

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
