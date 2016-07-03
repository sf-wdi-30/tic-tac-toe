// wait for the DOM to finish loading

$(document).ready(function() {
  var xIcon = ('url("img/xIcon.png")');
  var oIcon = ('url("img/oIcon.png")');
  var playerIcon = oIcon;
  var playerSwitch = function() {
    if (playerIcon === xIcon) {
      playerIcon = oIcon;
    }
    else {
      playerIcon = xIcon;
    }
  };
  var checkWin = function() {
    
  };

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
  playerSwitch();
}
  // $(this).css('background-color', 'blue');
  //   %(this).attr()
});
});
