const options = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const playerSelection = this.id;
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    result.innerHTML = `You selected ${playerSelection}, computer selected ${computerSelection}.`;
    
    if (playerSelection === computerSelection) {
      result.innerHTML += " It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result.innerHTML += " You win!";
    } else {
      result.innerHTML += " You lose.";
    }
  });
});
