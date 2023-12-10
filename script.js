let option = document.querySelectorAll(".options");
let compoptions = ["rock", "paper", "scissor"];
let x = false;
let playerAscore = 0;
let playerBscore = 0;
let Acounts = document.querySelector(".playerAscores");
let Bcounts = document.querySelector(".playerBscores");

let message = document.querySelector(".congratsmessage");
const result = (userInput) => {
  let random = Math.floor(Math.random() * 3);

  console.log(compoptions[random], "mid", userInput);

  if (userInput === compoptions[random]) {
    message.innerHTML = "It's a Draw";
    message.style.color = "rgb(61, 61, 61)";
    return;
  } else {
    if (userInput === "scissor") {
      x = compoptions[random] === "rock" ? true : false;
    } else if (userInput === "rock") {
      x = compoptions[random] === "paper" ? true : false;
    } else {
      x = compoptions[random] === "scissor" ? true : false;
    }
  }
  showWinner(x);
};

const showWinner = (x) => {
  if (x === false) {
    message.innerText = "Player Wins";
    playerAscore++;
    message.style.color = "green";
    Acounts.innerText = playerAscore;
  } else {
    message.innerText = "Computer Wins";
    playerBscore++;
    message.style.color = "red";
    Bcounts.innerText = playerBscore;
  }
};
option.forEach((box) => {
  box.addEventListener("click", () => {
    result(box.getAttribute("id"));
  });
});
