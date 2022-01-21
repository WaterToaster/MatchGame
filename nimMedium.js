let script = script.js;
let turn = 0;
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");


var showTurn = document.getElementById("showTurn");

function setName(){

    if(turn == 0){ 
        showTurn.innerHTML = player1Name;
    turn++
    }else {
        showTurn.innerHTML = player2Name;
        turn--;
    }
}
script.player1Name