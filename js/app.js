// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this functionz
var player = 1;

  $('.box').on("click", function clicked(event){

    var markedBoxes = $(this);

    if(markedBoxes.hasClass('X') || markedBoxes.hasClass('O')){
      alert('This box has already been selected!'); //Still switches images even after alert.
      markedBoxes('X') !== markedBoxes('O'); //this stops from switching colors.
    }else{
      if(player === 1){
        markedBoxes.addClass('X');
        player = 2;
      }else{
        markedBoxes.addClass('O');

      player = 1;//So that it alternates image and player.  If not will stay on the second players img and turn.
      }
    }
  });
});

$('.reset').click(function() {
  reset(table);
});
//function winningCombo(winner){
  //if($('.1').hasClass(winner) && $('.2').hasClass(winner) && $('.3').hasClass(winner)){
    //return true;
    //}else if($('.1').hasClass(winner) && $('.2').hasClass(winner) && $('.3').hasClass(winner)){
      //return true;
    //}else if($('.4').hasClass(winner) && $('.5').hasClass(winner) && $('.6').hasClass(winner)){
      //return true;
    //}else if($('.7').hasClass(winner) && $('.8').hasClass(winner) && $('.9').hasClass(winner)){
      //return true;
    //}else if($('.1').hasClass(winner) && $('.4').hasClass(winner) && $('.7').hasClass(winner)){
      //return true;
    //}else if($('.2').hasClass(winner) && $('.5').hasClass(winner) && $('.8').hasClass(winner)){
      //return true;
    //}else if($('.3').hasClass(winner) && $('.6').hasClass(player) && $('.9').hasClass(winner)){
      //return true;
    //}else if($('.1').hasClass(winner) && $('.5').hasClass(player) && $('.9').hasClass(winner)){
      //return true;
    //}else if($('.3').hasClass(winner) && $('.5').hasClass(player) && $('.7').hasClass(winner)){
      //return true;
    //}else{
      //return false;
    //}




//sanity check
//$(".row").on("click", function testClick(event){
//  alert("you did it")
//});
//alert("I am an alert box!");
