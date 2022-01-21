
let turn = 0;
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const pass = document.getElementById("passTurn");

showTurn = document.getElementById("playerTurn");

function setName(){

    if(turn == 0){ 
        showTurn.innerHTML = "Player 1";
    turn++
    }else {
        showTurn.innerHTML = "Player 2";
        turn--;
    }
}

setName();

const handleClick = evt =>{
    console.log(evt.target.id);
    switch(evt.target.id){
        case 'pass':
            setName();
        break;
        case 'row1':
            
        break;
        case 'btn3':
        
            break;
        case 'btn4':
            
            break;
        case 'btn5':
        
        break;



    }
}

row1.addEventListener('click',handleClick);
row2.addEventListener('click',handleClick);
row3.addEventListener('click',handleClick);
pass.addEventListener('click',handleClick);