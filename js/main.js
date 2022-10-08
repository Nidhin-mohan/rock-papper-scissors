 //  selecting score board elements

let userScoreDisplay = document.getElementById("userScoreVal");
let computerScoreDisplay = document.getElementById("compScoreVal");

let userChoiceDisplay = document.getElementById("result-user-stat");
let computerChoiceDisplay = document.getElementById("result-comp-stat");
let result = document.getElementById("result-final-stat");

let choices = document.querySelectorAll(".choice");
let arr = ["rock", "paper", "scissors"];

choices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoiceDisplay.innerText =  "User: " + e.target.getAttribute("alt");
  let test = () => {
    arr[Math.floor(Math.random * arr.length)];
  };
    computerChoiceDisplay.innerText = test ;
}))

