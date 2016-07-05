// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var playerX = 'x'; // turn = 0
  var playerO = 'o'; // turn = 1
  var turn = 0; // toggles btw 0 and 1 for switching turns

  var boardCheck; // check value in each cell
  var a1; // cell ids from html
  var a2;
  var a3;
  var b1;
  var b2;
  var b3;
  var c1;
  var c2;
  var c3;

  var checkWin;
  var xWins = false;
  var oWins = false;



    var newGame = function () {
        $('div').one('click', function (event) {
            if (turn === 0) {
                $(this).text(playerX);
                boardCheck();
                checkWin();
                turn = 1;
            } else {
                $(this).text(playerO);
                boardCheck();
                checkWin();
                turn = 0;
            }
        });
    };




});
