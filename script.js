// form to select player names
var playerOneName = document.querySelector('#player-one-name');
var playerTwoName = document.querySelector('#player-two-name');
var submitPlayerOneName = document.querySelector('#submit-player-one-name');
var submitPlayerTwoName = document.querySelector('#submit-player-two-name');
var playerX = document.querySelector('#x');
var playerO = document.querySelector('#o');

submitPlayerOneName.addEventListener('click', function(event) {
    event.preventDefault();

    if (playerOneName.value.trim() !== '') {
        playerX.textContent = playerOneName.value;
    }

    playerOneName.value = '';
});

submitPlayerTwoName.addEventListener('click', function(event) {
    event.preventDefault();

    if (playerTwoName.value.trim() !== '') {
        playerO.textContent = playerTwoName.value;
    }

    playerTwoName.value = '';
});


// var storing the main tag (divs container)
// counter variable to keep track of player turn
// vars for player X and player O, all the divs and announcing winner
// event listener to listen for a click on mainTag
// event.target to target a single div
// if the tagNamae is 'DIV' && tile not clicked on before continue
// if playerTurn counter modulo 2 === 0 it's player 1 turn else player 2 turn
// increase counter variable to change turn after a click
var mainTag = document.querySelector('main');
var playerTurn = 0;
var cross = 'X';
var naught = 'O'
var allDivs = document.querySelectorAll('div');
var announceWinner = document.querySelector('#announce-winner');

function handleClick(event) {
    var singleDiv = event.target;
    if (singleDiv.tagName === 'DIV' && singleDiv.textContent === '') {
        if (playerTurn % 2 === 0) {
            singleDiv.textContent = cross;
        } else {
            singleDiv.textContent = naught;
        }
        playerTurn++;
    }


// if 3 in a row for specific player that player wins
    if (allDivs[0].textContent === cross && allDivs[1].textContent === cross && allDivs[2].textContent === cross) {
        allDivs[0].className = 'player-one-wins';
        allDivs[1].className = 'player-one-wins';
        allDivs[2].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[3].textContent === cross && allDivs[4].textContent === cross && allDivs[5].textContent === cross) {
        allDivs[3].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[5].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[6].textContent === cross && allDivs[7].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[6].className = 'player-one-wins';
        allDivs[7].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[0].textContent === cross && allDivs[3].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[0].className = 'player-one-wins';
        allDivs[3].className = 'player-one-wins';
        allDivs[6].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[1].textContent === cross && allDivs[4].textContent === cross && allDivs[7].textContent === cross) {
        allDivs[1].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[7].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[2].textContent === cross && allDivs[5].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[2].className = 'player-one-wins';
        allDivs[5].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[0].textContent === cross && allDivs[4].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[0].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    } else if (allDivs[2].textContent === cross && allDivs[4].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[2].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[6].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
    }


    if (allDivs[0].textContent === naught && allDivs[1].textContent === naught && allDivs[2].textContent === naught) {
        allDivs[0].className = 'player-two-wins';
        allDivs[1].className = 'player-two-wins';
        allDivs[2].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[3].textContent === naught && allDivs[4].textContent === naught && allDivs[5].textContent === naught) {
        allDivs[3].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[5].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[6].textContent === naught && allDivs[7].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[6].className = 'player-two-wins';
        allDivs[7].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[0].textContent === naught && allDivs[3].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[0].className = 'player-two-wins';
        allDivs[3].className = 'player-two-wins';
        allDivs[6].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[1].textContent === naught && allDivs[4].textContent === naught && allDivs[7].textContent === naught) {
        allDivs[1].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[7].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[2].textContent === naught && allDivs[5].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[2].className = 'player-two-wins';
        allDivs[5].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[0].textContent === naught && allDivs[4].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[0].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    } else if (allDivs[2].textContent === naught && allDivs[4].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[2].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[6].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
    }


    // keep track of score until page reloaded and announce draw
    var trackPlayerOneWins = document.querySelector('#track-player-one-wins');
    var trackPlayerOneDraws = document.querySelector('#track-player-one-draws');
    var trackPlayerOneLoses = document.querySelector('#track-player-one-loses');
    var trackPlayerTwoWins = document.querySelector('#track-player-two-wins');
    var trackPlayerTwoDraws = document.querySelector('#track-player-two-draws');
    var trackPlayerTwoLoses = document.querySelector('#track-player-two-loses');

    if (playerTurn === 9  && announceWinner.textContent === '') {
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `It was a draw!`;
        trackPlayerOneDraws.textContent = Number(trackPlayerOneDraws.textContent) + 1;
        trackPlayerTwoDraws.textContent = Number(trackPlayerTwoDraws.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${playerX.textContent}, you won!`) {
        trackPlayerOneWins.textContent = Number(trackPlayerOneWins.textContent) + 1;
        trackPlayerTwoLoses.textContent = Number(trackPlayerTwoLoses.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${playerO.textContent}, you won!`) {
        trackPlayerTwoWins.textContent = Number(trackPlayerTwoWins.textContent) + 1;
        trackPlayerOneLoses.textContent = Number(trackPlayerOneLoses.textContent) + 1;
    }
}


// adding event listener to clicks on the divs
mainTag.addEventListener('click', handleClick);


// make a resart game button and keep scores
var restartBtn = document.querySelector('#restart-btn');

restartBtn.addEventListener('click', function() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].textContent = '';
        allDivs[i].className = '';
    }
    announceWinner.textContent = '';
    mainTag.addEventListener('click', handleClick);
    playerTurn = 0;
});