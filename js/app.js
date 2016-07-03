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
  $('#board div div').on('click', function(event) {
  $(this).css('background-image', playerIcon);
  playerSwitch();
  // $(this).css('background-color', 'blue');
    //%(this).attr()
});
});
