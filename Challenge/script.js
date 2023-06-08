let player1Name = prompt("Enter name for player 1");
let player2Name = prompt("Enter name for player 2");

document.getElementById('playerNames').innerHTML = `${player1Name} vs ${player2Name}`;

let player1Score = 0;
let player2Score = 0;

function rollDice(player) {
    let score = Math.floor(Math.random() * 6) + 1;
    if (player === 1) {
        player1Score = score;
        document.getElementById('player1Score').innerHTML = player1Score;
    } else if (player === 2) {
        player2Score = score;
        document.getElementById('player2Score').innerHTML = player2Score;
    }
    checkWinner();
}

function checkWinner() {
    if (player1Score !== 0 && player2Score !== 0) {
        let result = document.getElementById('result');
        if (player1Score > player2Score) {
            result.innerHTML = `${player1Name} wins!`;
        } else if (player2Score > player1Score) {
            result.innerHTML = `${player2Name} wins!`;
        } else {
            result.innerHTML = 'It is a draw!';
        }
    }
}
