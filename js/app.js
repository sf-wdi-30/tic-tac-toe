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

  $('button').on('click', function(event) {
    console.log("The button was clicked!");
    $("div").css('background-image', "");
    $("div").removeClass('filled');
  });

  $('#board div div').on('click', function(event) {
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
