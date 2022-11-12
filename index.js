const btn = document.querySelector(".btn");

const scroll = function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImgSource = "images/" + randomDiceImage;
  var diceP1 = document.querySelectorAll("img")[0];

  diceP1.setAttribute("src", randomImgSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImgSource2 = "images/" + randomDiceImage2;
  var diceP2 = document.querySelectorAll("img")[1];

  diceP2.setAttribute("src", randomImgSource2);

  if (randomImgSource > randomImgSource2) {
    document.querySelector("h1").innerHTML = "✌player 1 is winner!";
  } else if (randomImgSource < randomImgSource2) {
    document.querySelector("h1").innerHTML = "✌player 2 is winner!";
  } else {
    document.querySelector("h1").innerHTML = "🥲tie.";
  }

  console.log(btn);
};
scroll();

btn.addEventListener("click", scroll);
