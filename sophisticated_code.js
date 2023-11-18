/*
   filename: sophisticated_code.js
   content: This code is a complex implementation of a tic-tac-toe game with advanced AI logic for the computer player.
*/

// Tic-Tac-Toe Game
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var players = ['X', 'O'];
var currentPlayer;
var movesPlayed = 0;

function startGame() {
  currentPlayer = players[Math.round(Math.random())];
  printBoard(board);
  playTurn(currentPlayer);
}

function printBoard(board) {
  console.log("Current Board:");
  for (var i = 0; i < 3; i++) {
    console.log(board[i][0], board[i][1], board[i][2]);
  }
  console.log("-------------------");
}

function playTurn(player) {
  if (player === 'X') {
    console.log("Your turn (X). Enter the coordinates (0-2) to make a move:");
  } else {
    console.log("Computer's turn (O)...");
    makeComputerMove();
  }
}

function makeComputerMove() {
  var bestScore = -Infinity;
  var bestMove = {};

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = 'O';
        var score = minimax(board, 0, false);
        board[i][j] = '';

        if (score > bestScore) {
          bestScore = score;
          bestMove = { i, j };
        }
      }
    }
  }

  board[bestMove.i][bestMove.j] = 'O';
  printBoard(board);
  checkWin('O');
}

function minimax(board, depth, isMaximizingPlayer) {
  var scores = {
    'O': 1,
    'X': -1,
    'tie': 0
  };

  if (checkWin('O')) {
    return scores['O'];
  }

  if (checkWin('X')) {
    return scores['X'];
  }

  if (isBoardFull()) {
    return scores['tie'];
  }

  if (isMaximizingPlayer) {
    var bestScore = -Infinity;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = 'O';
          var score = minimax(board, depth + 1, false);
          board[i][j] = '';

          bestScore = Math.max(score, bestScore);
        }
      }
    }

    return bestScore;
  } else {
    var bestScore = Infinity;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = 'X';
          var score = minimax(board, depth + 1, true);
          board[i][j] = '';

          bestScore = Math.min(score, bestScore);
        }
      }
    }

    return bestScore;
  }
}

function checkWin(player) {
  if (
    (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
    (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
    (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
    (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
    (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
    (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[2][0] === player && board[1][1] === player && board[0][2] === player)
  ) {
    if (player === 'O') {
      console.log("Computer Wins!");
    } else {
      console.log("You Win!");
    }
    return true;
  }
  return false;
}

function isBoardFull() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  console.log("It's a Tie!");
  return true;
}

startGame();