const rps = (p1, p2) => {
    const choices = ['rock','paper','scissors'];
    
    if (!choices.includes(p1) || !choices.includes(p2)) {
      return 'Invalid choice: Please choose from rock, paper, and scissors only.';
    }
    
    if (p1 === p2) {
      return 'Draw!';
    }
    
    if (
      (p1 === 'rock' && p2 === "scissors")
      || (p1 === 'paper' && p2 === "rock")
      || (p1 === 'scissors' && p2 === "paper")
    ) {
      return 'Player 1 won!';
    } else {
      return 'Player 2 won!';
    }
    
  };