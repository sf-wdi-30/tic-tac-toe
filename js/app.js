// wait for the DOM to finish loading
alert("Sanity Check!");

$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
var turnCounter = 0; //maximum of 9 turns

    $(".box").on("click", function testClick(event){
      var whatBox = $(this).html(); // changed so that alert tells which box is being clicked
        //alert("You clicked " + whatBox);
    });
    $(".box").on("click", function insertX(e){
      if (turnCounter % 2 === 0){ //adds value of x or o to each box and changes text
        $(this).val("x");
        $(this).text("x");
      }
      else {
        $(this).val("o");
        $(this).text("o");
      }

    });
    $(".box").on("click", function changeColor(event){ //changesColor of each box
      if ($(this).val() === "x"){ //changes color to blue if box value is x, red if o
        $(this).css('background-color', ("blue"));
      }
      else {
        $(this).css('background-color', ("red"));
      }
    turnCounter++;
    });

    //
    // for(i = 0; i < 8; i++){
    //   if (i%2 === 0){
    //
    //   }
    // }
// //conditional statement that will stop the player from using a taken square
//     // if($(this).val("x")){
//     //   $(this).on("click", function dontClick(event){
//     //     event.preventDefault();
//     //     alert("Can't move here");
//     //   });
//     // }
// var board = 0;
// $('.row').find('.box').click(
//        function(){
//          if(board%2 === 0){
//            $(this).val("X");
//            $(this).text("X");
//          } else{
//            $(this).val("O");
//            $(this).text("O");
//          }
//          board++;
//      });
});
