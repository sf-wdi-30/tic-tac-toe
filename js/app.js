// wait for the DOM to finish loading
alert("Sanity Check!");
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
var turnCounter = 0; //maximum of 9 turns


  $(".box").on("click", function checkBox(event){
      if ($(this).hasClass("took")){// ask TAs
        alert("Can't move here");
      }
      else{
          if (turnCounter % 2 === 0){ //adds value of x or o to each box and changes text
            $(this).val("x");
            $(this).text("x");
            $(this).addClass("took");
            $(this).css('background-color', ("blue"));
          }
          else if (turnCounter % 2 === 1){
            $(this).val("o");
            $(this).text("o");
            $(this).addClass("took");
            $(this).css('background-color', ("red"));
          }
      turnCounter++;    
      }

      if (($(".1stbox").val() && $(".2ndbox").val() && $(".3rdbox").val()) === "o"){ // ask TAs
        alert("o wins!");
      }
      else if ($(".4thbox").val() && $(".5thbox").val() && $(".6thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".7thbox").val() && $(".8thbox").val() && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".1stbox").val() && $(".4thbox").val() && $(".7thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".2ndbox").val() && $(".5thbox").val() && $(".8thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".3rdbox").val() && $(".6thbox").val() && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".1stbox").val() && $(".5thbox").val() && $(".9thbox").val() === "o"){
        alert("o wins!");
      }
      else if ($(".3rdbox").val() && $(".5thbox").val() && $(".7thbox").val() === "o"){
        alert("o wins!");
      }

    });
});


      //
      // $(".box").on("click", function changeColor(event){ //changesColor of each box
      //   if ($(this).val() === "x"){ //changes color to blue if box value is x, red if o
      //     $(this).css('background-color', ("blue"));
      //   }
      //   else {
      //     $(this).css('background-color', ("red"));
      //   }
      // });


      //checking for wins
