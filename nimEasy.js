
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
            if(!(String(answers[2]).split(",")[1] == 'true')){
                score = score-5;
                scoreDisplay.innerHTML= score;
            }
            else{
                questnum++;
                setQuestion(questnum)
            }
            break;
        case 'btn4':
                if(!(String(answers[3]).split(",")[1] == 'true')){
                score = score-5;
                scoreDisplay.innerHTML= score;
            }
            else{
                questnum++;
                setQuestion(questnum)
            }
            break;
        case 'btn5':
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "hidden";
        Introduction.style.display = 'none';
        current.style.display = 'block';
        scoreDisplay.style.display = 'block';
        scoreDisplay.innerHTML = score;
        setQuestion(questnum)
        break;



    }
}

row1.addEventListener('click',handleClick);
row2.addEventListener('click',handleClick);
row3.addEventListener('click',handleClick);
pass.addEventListener('click',handleClick);