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