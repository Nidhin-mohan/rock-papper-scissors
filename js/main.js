 //  selecting score board elements

let userScoreDisplay = document.getElementById("userScoreVal");
let computerScoreDisplay = document.getElementById("compScoreVal");

let userChoiceDisplay = document.getElementById("result-user-stat");
let computerChoiceDisplay = document.getElementById("result-comp-stat");
let finalResult = document.getElementById("result-final-stat");

let choices = document.querySelectorAll(".choice");
let arr = ["rock", "paper", "scissors"];
let userChoice;

let userPoint = 0 ;
let computerPoint = 0;

choices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.getAttribute("alt");
    userChoiceDisplay.innerText =  "User: " + userChoice;
 
    computerChoiceDisplay.innerText = "Computer: " + computerChoice();

      resultcall();

}))

 let computerChoice = () => 
   arr[Math.floor(Math.random() * arr.length)];
 ;
  // result check function

function resultcall(){

  console.log(userChoice + computerChoice());
  check = userChoice + computerChoice();

  if (
    check == "rockscissors" ||
    check == "scissorspaper "||
    check == "paperrock"
  ) {
    finalResult.innerText = "You win";
         userPoint++;
         userScoreDisplay.innerText = userPoint;
  }
    if (
      check == "scissorsrock" ||
      check == "paperscissors" ||
      check == "rockpaper"
    ) {
      finalResult.innerText = "computer win";
           computerPoint++;
           computerScoreDisplay.innerText = computerPoint;
    }

    else
    {
       finalResult.innerText = "Its a draw";
    }




    // switch (userChoice + computerChoice()) {
    //   case "rockscissors":
    //   case "scissorspaper":
    //   case "paperrock":
    //     finalResult.innerText = "You win";
    //     userPoint++;
    //     userScoreDisplay.innerText = userPoint;

    //     break;
    //   case "scissorsrock":
    //   case "paperscissors":
    //   case "rockpaper":
    //     finalResult.innerText = "computer win";
    //     computerPoint++;
    //     computerScoreDisplay.innerText = computerPoint;
    //     break;
    //   case "paperpaper":
    //   case "scissorsscissors":
    //   case "rockrock":
    //     finalResult.innerText = "Its a draw";
    //     break;
    //   default:
    //     finalResult.innerText = "Its error";
    // }
   
  
 

}