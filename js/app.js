// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this functionz
  var player = 1;

  $('.box').on("click", function clicked(event){

    var markedBoxes = $(this);

    if(markedBoxes.hasClass('X') || markedBoxes.hasClass('O')){
      alert('This box has already been selected!');//Still switches images even after alert.
      markedBoxes('X') !== markedBoxes('O');//this stops from switching colors.

    }if(player === 1){
      markedBoxes.addClass('X');
      player = 2;
    }else{
      markedBoxes.addClass('O');

      player = 1;//So that it alternates image and player.  If not will stay on the second players img and turn.
  }
});
});

//$('.btn').click(function() {
  // player = 1;
  // messages.html('');
  // reset(table);
 //});


//rules
//var matchesOnBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //if ([0,1,2]){
    //alert("You have won!");
  //}else if ([3,4,5]){
    //alert("You have won!");
  //}else if ([6,7,8]);
    //alert("You have won!");
  //}else if ([0,3,6]);
    //alert("You have won!");
  //}else if ([1,4,7]);
    //alert("You have won!");
  //}else if ([2,5,8]);
    //alert("You have won!");
  //}else if ([0,4,8]);
    //alert("You have won!");
  //}else if ([2,4,6]);
    //alert("You have won!");
  //}else ;{
    //alert("This game is a tie.")





//sanity check
//$(".row").on("click", function testClick(event){
//  alert("you did it")
//});
//alert("I am an alert box!");
