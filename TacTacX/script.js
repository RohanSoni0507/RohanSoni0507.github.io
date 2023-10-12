const modeSelection = document.getElementById('mode-selection');
const playHumanButton = document.getElementById('play-human');
const playAIButton = document.getElementById('play-ai');
const gameContainer = document.getElementById('game-container');
const board = document.getElementById('tic-tac-toe-board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let againstAI = false;

function cellClick(index) {
    if (boardState[index] === '' && !gameOver) {
        boardState[index] = currentPlayer;
        render();
        if (checkWin()) {
            message.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (boardState.indexOf('') === -1) {
            message.textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (!gameOver && againstAI && currentPlayer === 'O') {
                setTimeout(makeAIMove, 500);
            }
        }
    }
}
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;
        }
    }

    return false;
}
function render() {
    board.innerHTML = '';
    for (let i = 0; i < boardState.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = boardState[i];
        cell.addEventListener('click', () => cellClick(i));
        board.appendChild(cell);
    }
}

function minimax(boardState, depth, isMaximizing) {
    const scores = {
        X: -1,
        O: 1,
        tie: 0
    };

    if (checkWin()) {
        return scores[currentPlayer];
    }

    if (boardState.indexOf('') === -1) {
        return scores.tie;
    }

    const nextPlayer = isMaximizing ? 'O' : 'X';
    let bestScore = isMaximizing ? -Infinity : Infinity;

    for (let i = 0; i < boardState.length; i++) {
        if (boardState[i] === '') {
            boardState[i] = nextPlayer;
            const score = minimax(boardState, depth + 1, !isMaximizing);
            boardState[i] = ''; // Undo the move

            if (isMaximizing && score > bestScore) {
                bestScore = score;
            }
            if (!isMaximizing && score < bestScore) {
                bestScore = score;
            }
        }
    }

    return bestScore;
}
function makeAIMove() {
    let bestMove;
    let bestScore = -Infinity;

    for (let i = 0; i < boardState.length; i++) {
        if (boardState[i] === '') {
            boardState[i] = 'O';
            const score = minimax(boardState, 0, false);
            boardState[i] = ''; // Undo the move

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    cellClick(bestMove);
}
playHumanButton.addEventListener('click', () => {
    againstAI = false;
    startGame();
});

playAIButton.addEventListener('click', () => {
    againstAI = true;
    startGame();
});
function startGame() {
    modeSelection.style.display = 'none';
    gameContainer.style.display = 'block';
    render();
}