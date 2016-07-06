// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("NOW TIME FOR 2016 ELECTION TIC TAC TOE!! YA DIG? WHAT ARE YA WAITING FOR? PLAYER 1 PICK A SQUARE!");
var counter=3;
  $('#board div div').on('click', function(event) {
    event.preventDefault();

    // console.log('in here');
    // console.log(this);



    if (counter % 2 ==0){
       if ($(this).hasClass("Clicked")){

       }
       else{

   $(this).css('background-image', 'url(trump.jpg)');
    $(this).addClass("One Clicked");
   alert("Player 2's Turn");
   counter=counter+1;
     }
   }
   else {
     if ($(this).hasClass("Clicked")){

     }
     else{
   $(this).css('background-image', 'url(clinton.jpg)');
   $(this).addClass("Two Clicked");
   alert("Player's 1 Turn");
   counter=counter+1;
     }
  }

  });


});
