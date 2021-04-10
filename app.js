var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result = document.querySelector(".result > p")
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convert(letter){
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  if (letter === "s") return "Scissors"

}

function win(userChoice, compChoice) {
userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
result.innerHTML = convert(userChoice) + " beats " + convert(compChoice) + " YOU WIN!";
}


function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result.innerHTML =  convert(userChoice) + " beats " + convert(compChoice) + " Lose~~~";
}

function draw(userChoice, compChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result.innerHTML =  convert(userChoice) + " beats " + convert(compChoice) + " Draw...";
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, compChoice);
    break;
    case "sr":
    case "rp":
    case "ps":
    lose(userChoice, compChoice);
    break;
    case "rr":
    case "ss":
    case "pp":
    draw(userChoice, compChoice);
    break;
  }
}

function main() {
  rock.addEventListener('click', function() {
    game("r");
  })

  paper.addEventListener('click', function() {
    game("p");
  })

  scissors.addEventListener('click', function() {
    game("s");
  })
}


main();
