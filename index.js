// //players adding their names
// var p1 = prompt("Insert your name here Player 1")
// var fir = p1.toLocaleLowerCase();
// var sec = p1.toUpperCase();
// var player1Name = sec.slice(0,1) + fir.slice(1,p1.length);

// var p2 = prompt("Insert your name here Player 2")
// var fir2 = p2.toLocaleLowerCase();
// var sec2 = p2.toUpperCase();
// var player2Name = sec2.slice(0,1) + fir2.slice(1,p2.length);

var randomNumber1 = Math.floor((Math.random() * 6) + 1); // random number between 1 and 6

var randomDiceImage1 = "dice" + randomNumber1 +".png"; // selecting a dice png image at random from dice1.ong to dice6.png

var randomImageSrc1 = "images/" + randomDiceImage1; // selecting the dice folder "imnages/dice1.png to dice6.png"



var randomNumber2 = Math.floor((Math.random() * 6) + 1); // random number between 1 and 6

var randomDiceImage2 = "dice" + randomNumber2 +".png"; // selecting a dice png image at random from dice1.ong to dice6.png

var randomImageSrc2 = "images/" + randomDiceImage2; // selecting the dice folder "imnages/dice1.png to dice6.png"



// different ways of changing the source attribute of an elementgg
//step 1
image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSrc1);

//step 2
document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc2);


// adding the logic for which player wins the dice game😱
if (randomNumber2 > randomNumber1){
    document.querySelectorAll(".text p")[0].innerHTML = " Player 1 wins! 🥳✌️";

}

else if (randomNumber1 > randomNumber2){
    document.querySelectorAll(".text p")[0].innerHTML ="Player 2 wins! 🥳✌️";
}

else{
 document.querySelectorAll(".text p")[0].innerHTML = "Its a tie, You both got lucky, Refresh me to go again!";
}
