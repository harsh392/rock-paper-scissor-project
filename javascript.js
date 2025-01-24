function getComputerChoice() {
    let val = Math.random() * 3;

    return (val <= 1) ? "rock" : (val <= 2) ? "paper" : "scissors";
    
}

function getHumanChoice() {
   return prompt("please choose between rock paper and scissors");
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    if (humanChoice == "ROCK" && computerChoice == "ROCK") {
        console.log("It's a Tie! You both chose ROCK");
    } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
        console.log("It's a Tie! You both chose PAPER");
    } else if (humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        console.log("It's a Tie! You both chose SCISSORS");
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;  // Computer wins
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;  // Human wins
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You Win! Paper beats Rock");
        humanScore++;  // Human wins
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;  // Computer wins
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;  // Computer wins
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;  // Human wins
    }
        
}


function playGame(){

    for (let index = 0; index < 5; index++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore == computerScore){
        console.log("It's overall a tie");
    }
    else if(humanScore > computerScore){
        console.log("Human wins!");
    }else{
        console.log("Human loses!");
    }
}