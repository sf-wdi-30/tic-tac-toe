// wait for the DOM to finish loading
$(document).ready(function() {
var player1 = "X";
//var player2 = "O"; //use this while trying to block the other box
  // all code to manipulate the DOM
  // goes inside this functionz

$(".box").on("click", function clicked(event){
  var markedBoxes = $(this);

  if(player1===0){
    player1 = 1;
      markedBoxes.css("background" , "url(http://i.imgur.com/OhWUAEc.jpg?4");//O
  }else{
    player1 = 0;
      markedBoxes.css("background" , "url(http://i.imgur.com/KVrSf2j.png?6");//X
    }
  });
});

$(".btn").on("click", function clear(event){

})


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
