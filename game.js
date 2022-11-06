let computerScore = 0;
let playerScore = 0;

// Game starts from asking player name with question 'Please, enter your name'.If player enters his name - in the game player should
// be named according to name he / she entered.
// If player omits his name entering - he / she should be named as 'User' during the game.
const userName = () => {
    let playerName = prompt("Please, enter your name");
    if (!playerName) {
        return 'User';
    } else {
        return playerName;
    }
}

// Player asked to make his move with message: 'Rock, Scissors, Paper... Please make your move'
// If player enters any other(or nothing) except 'rock', 'scissors', 'paper', he / she should be asked again.
// If player clicks 'Cancel' button game should stop and message appear 'You aborted this game. To start new game just refresh the page.'
const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';
const choiceList = [rock, scissors, paper];

const playerMove = () => {
    let playerMoveSelected = prompt('Rock, Scissors, Paper... Please make your move');
    if (choiceList.includes(playerMoveSelected.toLowerCase())) {
        return playerMoveSelected.toLowerCase();
    } else if (playerMoveSelected === null); {
        alert('You aborted this game. To start new game just refresh the page.');
    }
    return playerMove();
}

// After player entered one of valid options, his option should be compared with computers choice.
// And user should see what computer selected with message: 'Computer move is: rock | scissors | paper'.
const computerMove = () => {
    const randomIndex = Math.round(Math.random() * (choiceList.length - 1));
    computerSelected = choiceList[randomIndex];
    alert("Computer move is: " + computerSelected);
    return computerSelected;
}

// If they are even game continues with asking user to make his / her move again.
// If they selected different options - user should see message:
// If computer won this round: 'Computer won this round: Current count is <username>: <userscore>: Computer <computerScore>'
// If user won this round: 'You won this round: Current count is <username>: <userscore>: Computer <computerScore>'
// If after this round someone achieved score 3 - user should see a message:
// If user won: 'Congratulations. You won this game. Count - You: <userscore> : Computer <computerScore>'
// If computer won: 'Sorry. You lost this game. Count - You: <userscore> : Computer <computerScore>'
const result = (NameUser,playerSelected,computerSelected) => {
    if (((playerSelected === paper && computerSelected === scissors) || (playerSelected === rock && computerSelected === paper) || (playerSelected === scissors && computerSelected === rock))) {
        computerScore++;
        alert(`Computer won this round: Current count is ${NameUser}: ${playerScore} - Computer: ${computerScore}`);
        return computerScore === 3 ? (alert(`Sorry. You lost this game. Count - You: ${playerScore} - Computer: ${computerScore}`), newGame()) : сheck(NameUser, playerMove()) ? result(NameUser, playerSelected, computerMove()) : false;
        } else if (((playerSelected === rock && computerSelected === scissors) || (playerSelected === scissors && computerSelected === paper) || (playerSelected === paper && computerSelected === rock))) {
            playerScore++;
            alert(`You won this round: Current count is ${NameUser}: ${playerScore} - Computer: ${computerScore}`);
            return  playerScore === 3 ? (alert(`Congratulations. You won this game. Count - You: ${playerScore} - Computer: ${computerScore}`), newGame()) : сheck(NameUser, playerMove()) ? result(NameUser, playerSelected, computerMove()) : false;
        } else if (playerSelected === computerSelected) {
            return сheck(NameUser, playerMove()) ? result(NameUser, playerMove(), computerMove()) : false;
        }
}

const сheck = (NameUser,playerSelected) => {
    return playerSelected ? result(NameUser, playerSelected, computerMove()) : false;
}

// After game finished user should be asked if he / she wants to play again with message: 'Do you want to start new game?'.
// If user selects yes - game should start from the beginning.
// If no - game should stop
const newGame = (NameUser,playerSelected) => {
    if (confirm('Do you want to start new game?')) {
       computerScore = 0;
       playerScore = 0;
       сheck(userName(), playerMove()) ? result(NameUser, playerSelected, computerMove()) : false
    }
}

сheck(userName(),playerMove());