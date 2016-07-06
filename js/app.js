// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  alert("Welcome to the Presidential 2016 TIC TAC TOE Game! Now, Let's Play! Player One, Go First!");
var counter=2;
  $('#board div div').on('click', function(event) {
    event.preventDefault();


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
   else if(counter % 2 !=0) {
     if ($(this).hasClass("Clicked")){

     }
     else{
   $(this).css('background-image', 'url(clinton.jpg)');
   $(this).addClass("Two Clicked");
   alert("Player's 1 Turn");
   counter=counter+1;

    }
  }
  if ($(".tr").hasClass("One") && $(".tm").hasClass("One") && $(".tl").hasClass("One")){
           alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
  }
  if ($(".mr").hasClass("One") && $(".mm").hasClass("One") && $(".ml").hasClass("One")){
           alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
  }
   if ($(".br").hasClass("One") && $(".bm").hasClass("One") && $(".bl").hasClass("One")){
            alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
  }
  if ($(".tl").hasClass("One") && $(".ml").hasClass("One") && $(".bl").hasClass("One")){
           alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
}
   if ($(".tm").hasClass("One") && $(".mm").hasClass("One") && $(".bm").hasClass("One")){
            alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
  }
  if ($(".tr").hasClass("One") && $(".mr").hasClass("One") && $(".br").hasClass("One")){
             alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
    }
   if ($(".tl").hasClass("One") && $(".mm").hasClass("One") && $(".br").hasClass("One")){
            alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
    }
  if ($(".tr").hasClass("One") && $(".mm").hasClass("One") && $(".bl").hasClass("One")){
     alert("PLAYER ONE WON! TRUMP TRUMP TRUMP!!"); $("#board div div").addClass("Clicked");
  }

  if ($(".tr").hasClass("Two") && $(".tm").hasClass("Two") && $(".tl").hasClass("Two")){
           alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }
  if ($(".mr").hasClass("Two") && $(".mm").hasClass("Two") && $(".ml").hasClass("Two")){
           alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }
   if ($(".br").hasClass("Two") && $(".bm").hasClass("Two") && $(".bl").hasClass("Two")){
            alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }
  if ($(".tl").hasClass("Two") && $(".ml").hasClass("Two") && $(".bl").hasClass("Two")){
           alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }
   if ($(".tm").hasClass("Two") && $(".mm").hasClass("Two") && $(".bm").hasClass("Two")){
            alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }
  if ($(".tr").hasClass("Two") && $(".mr").hasClass("Two") && $(".br").hasClass("Two")){
             alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
    }
   if ($(".tl").hasClass("Two") && $(".mm").hasClass("Two") && $(".br").hasClass("Two")){
            alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
    }
  if ($(".tr").hasClass("Two") && $(".mm").hasClass("Two") && $(".bl").hasClass("Two")){
     alert("PLAYER TWO WON! Yay Clinton! First female president FTW!"); $("#board div div").addClass("Clicked");
  }





  });
  $('input').on('click', function(event) {
    resetAll();
  });
});
 function resetAll(){
   $("#board div div").removeClass("One Two Clicked");
   $("#board div div").css("background-image", "");
   alert("A New Game has started! Player One, go ahead and pick a square!");
 }
