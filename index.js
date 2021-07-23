var randomNumber1 = Math.floor(Math.random()*6)+1;  //random number btw 1 - 6
var randomNumber2 = Math.floor(Math.random()*6)+1;  //random number btw 1 - 6


var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"  // random dice1 to dice6
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"  // random dice1 to dice6

// document.getElementsByTagName("img")[0].setAttribute("src",randomDiceImage);

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomDiceImage1>randomDiceImage2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if (randomDiceImage1<randomDiceImage2){
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
