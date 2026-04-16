function getComputerChoice(){
  const computerMove = Math.floor(Math.random() * 3)+1;

  if (computerMove === 1){
    return 'Rock';
  }else if(computerMove === 2){
    return 'Paper';
  }else {
    return 'Scissors';
  }

}

function getHumanChoice(){
  const choice = prompt("What is your move?");

  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice){
    if (humanChoice === 'Rock'){
      if (computerChoice === 'Rock'){
        return 'its a Draw !';
      }else if (computerChoice === 'Paper'){
        computerScore++;
        return 'You Lose !';     
      }else if (computerChoice === 'Scissors'){
        humanScore++
        return 'You Win !';
        }

    }else if (humanChoice === 'Paper'){
      if (computerChoice === 'Paper'){
        return 'its a Draw !';
      }else if (computerChoice === 'Scissors'){
        computerScore++;
        return 'You Lose !';
          
      }else if (computerChoice === 'Rock'){
        humanScore++
        return'You Win !';
        }

    }else if (humanChoice === 'Scissors'){
      if (computerChoice === 'Scissors'){
        return'its a Draw !';
      }else if (computerChoice === 'Rock'){
        computerScore++;
        return'You Lose !'; 
      }else if (computerChoice === 'Paper'){
        humanScore++;
        return'You Win !';          
        }
    }
  }
  for(let i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection,computerSelection))

    console.log(humanScore, computerScore);
  }
}
console.log(playGame())
