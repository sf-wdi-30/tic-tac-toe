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


    boardCheck = function () {
        a1 = $('#a1').html();
        a2 = $('#a2').html();
        a3 = $('#a3').html();
        b1 = $('#b1').html();
        b2 = $('#b2').html();
        b3 = $('#b3').html();
        c1 = $('#c1').html();
        c2 = $('#c2').html();
        c3 = $('#c3').html();
    };


        checkWin = function () {
            if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
            (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
            (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
            (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
            (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
            (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
            (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
            (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
            ) {
                xWins = true;
                winAlert();

            } else { // checks if O won
                if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
                (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
                (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
                (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
                (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
                (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
                (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
                (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
                ) {
                    oWins = true;
                    winAlert();

                } else { // checks if all boxes filled + tie game
                    if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                        alert("It's a tie!");
                    }
                }
            }
        };




});
