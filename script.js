const dice = [];
let players = 3;
const diceAmount = players*6;
let sideOne, sideTwo, sideThree, sideFour, sideFive, sideSix;

class Player {
    constructor(name, playerDice){
        this.name = name;
        this.playerDice = playerDice;
    }
    getDice(arrayStart, arrayEnd){
        return dice.slice(arrayStart, arrayEnd);
    }
}

function rollDice(){
    for (let i=0; i < diceAmount; i++) {
        dice.push(Math.floor((Math.random() * 6) + 1));
     }
     if (dice.includes(7)){
         rollDice();
     }
}

function diceNumbers(){
    sideOne = dice.filter(x => x === 1).length;
    sideTwo = dice.filter(x => x === 2).length;
    sideThree = dice.filter(x => x === 3).length;
    sideFour = dice.filter(x => x === 4).length;
    sideFive = dice.filter(x => x === 5).length;
    sideSix = dice.filter(x => x === 6).length;
}

function checkPlayerCount(){
    players = parseFloat(document.getElementById("playerCount").value);
    document.getElementById("playerTwo").innerHTML = 'There are '+players+' players.';
    document.getElementById("testingRange").innerHTML = dice +'// 1:'+sideOne+' 2:'+sideTwo+' 3:'+sideThree+' 4:'+sideFour+' 5:'+sideFive+' 6:'+sideSix;
}

function checkDice(){
    let diceNumber = parseFloat(document.getElementById("diceNumber").value);
    let diceCount = parseFloat(document.getElementById("diceCount").value);
    let outcome;

    switch(diceNumber){
        case 1:
            outcome = (diceCount === sideOne) ? "You win!" : "You lose :(";
            break;
        case 2:
            outcome = (diceCount === sideTwo) ? "You win!" : "You lose :(";
            break;
        case 3:
            outcome = (diceCount === sideThree) ? "You win!" : "You lose :(";
            break;
        case 4:
            outcome = (diceCount === sideFour) ? "You win!" : "You lose :(";
            break;
        case 5:
            outcome = (diceCount === sideFive) ? "You win!" : "You lose :(";
             break;
        case 6:
            outcome = (diceCount === sideSix) ? "You win!" : "You lose :(";
            break;
    }
    document.getElementById("playerOne").innerHTML = diceNumber+" "+diceCount+" "+outcome;
}

rollDice();
diceNumbers();
playerDice();

document.getElementById("testingRange").innerHTML = dice +'// 1:'+sideOne+' 2:'+sideTwo+' 3:'+sideThree+' 4:'+sideFour+' 5:'+sideFive+' 6:'+sideSix;
document.getElementById("playerTwo").innerHTML = 'There are '+players+' players.';
