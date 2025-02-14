const cells = document.querySelectorAll('.cell');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { player1: 0, player2: 0 };
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;

    // Exibe a imagem correspondente ao jogador atual
    const icon = cell.querySelector('.icon');
    if (currentPlayer === 'X') {
        icon.src = '/portifolio/src/assets/X.png'; // Caminho da imagem para "X"
    } else {
        icon.src = '/portifolio/src/assets/O.png'; // Caminho da imagem para "O"
    }
    icon.style.display = 'block'; // Torna a imagem visível

    if (checkWin()) {
        endGame(false);
        return;
    }

    if (board.every(cell => cell !== '')) {
        endGame(true);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function endGame(isDraw) {
    gameActive = false;
    if (isDraw) {
        alert('Empate!');
    } else {
        if (currentPlayer === 'X') {
            scores.player1++;
            score1.textContent = scores.player1;
            // alert(`${player1Input.value || 'Jogador 1'} venceu!`);
        } else {
            scores.player2++;
            score2.textContent = scores.player2;
            // alert(`${player2Input.value || 'Jogador 2'} venceu!`);
        }
        resetGame();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        const icon = cell.querySelector('.icon');
        icon.src = ''; // Remove a imagem
        icon.style.display = 'none'; // Esconde a imagem
    });
    currentPlayer = 'X';
    gameActive = true;
}

function resetScore() {
    scores.player1 = 0;
    scores.player2 = 0;
    score1.textContent = scores.player1;
    score2.textContent = scores.player2;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetScore);