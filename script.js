var randomNumberLeft = Math.floor(Math.random() * 6) + 1;
var imageSourceLeft = "./images/dice" + randomNumberLeft + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSourceLeft);

var randomNumberRight = Math.floor(Math.random() * 6) + 1;
var imageSourceRight = "./images/dice" + randomNumberRight + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSourceRight);

if (randomNumberLeft > randomNumberRight) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if (randomNumberRight > randomNumberLeft) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

else {
    document.querySelector("h1").textContent = "Draw!";
}