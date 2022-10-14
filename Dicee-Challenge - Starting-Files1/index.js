//Player 1 Section

var randonNumber1 = (Math.floor(Math.random() * 6) + 1);

var randonDiceImage1 = "Dice" + randonNumber1 + ".png";

var randonImageSource1 = "images/" + randonDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src", randonImageSource1);

//Player 2 Section

var randonNumber2 = (Math.floor(Math.random() * 6) + 1);

var randonImageSource2 = "images/Dice" + randonNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randonImageSource2);


//Condition

if (randonNumber1 > randonNumber2) {

    document.querySelector("h1").innerHTML = "player 1 Wins !!";
} else if (randonNumber2 > randonNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !!";
} else {
    document.querySelector("h1").innerHTML = "Draw !!";
}