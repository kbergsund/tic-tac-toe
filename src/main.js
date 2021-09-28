// Query Selectors
var gameBoard = document.querySelector('#gameBoard');
var winCount = document.querySelectorAll('#winCount');

// Event Listeners
window.addEventListener('load', generateGrid);
gameBoard.addEventListener('click', playGame);

// Global Variable
var game = new Game();

// Functions & Event Handlers
function generateGrid() {
  gameBoard.childNodes[1].innerText = `It's ${game.turn.token}'s turn`;
  var grid = gameBoard.childNodes[3];
  grid.innerHTML = '';
  for (var i = 0; i < 9; i++) {
    gridIndex = i;
    grid.innerHTML += `
    <article class="${gridIndex}">
    </article>
    `
  }
  game.resetGame();
  persistWins();
}

function persistWins() {
  for (var i = 0; i < 2; i++) {
    var player = i + 1;
    var winsToDisplay = game[`player${player}`].wins;
    if (winsToDisplay === 1) {
      var win = 'win';
    } else {
      var win = 'wins';
    }
    winCount[i].childNodes[3].innerText = `${winsToDisplay} ${win}`;
  }
}

function playGame() {
  if (game.win || game.draw) {
    return;
  }
  updateGrid();
  evaluateGame();
  if (event.target.type === 'button') {
    clearDOM();
  }
}

function updateGrid() {
  var grid = gameBoard.childNodes[3];
  var tileClicked = event.target.classList;
  game.takeTurn(tileClicked);
  for (var i = 0; i < grid.childNodes.length; i++) {
    var tileToUpdate = grid.childNodes[i];
    var tileNumber = grid.childNodes[i].classList;
    if (tileNumber === tileClicked) {
      if (!tileClicked.contains('disabled')) {
        tileToUpdate.innerHTML = `<p>${game.board[tileNumber]}<p>`
        tileClicked.add('disabled');
      }
    }
  }
}

function evaluateGame() {
  var header = gameBoard.childNodes[1];
  if (game.checkForWin()) {
    header.innerText = `${game.turn.token} wins!`;
    displayWin();
    resetPlay();
  } else if (game.checkForDraw()) {
    resetPlay();
  } else {
    game.toggleTurn();
    gameBoard.childNodes[1].innerText = `It's ${game.turn.token}'s turn`;
  }
}

function displayWin() {
  var winnerID = game.processWin(game.winningToken);
  var interpolatedWinner = game[`player${winnerID}`].wins;
  if (interpolatedWinner === 1) {
    var win = 'win';
  } else {
    var win = 'wins';
  }
  winCount[winnerID - 1].childNodes[3].innerText = `${interpolatedWinner} ${win}`;
}

function resetPlay() {
  setTimeout(function() {
    game.resetGame();
    generateGrid();
  }, 1500);
}


function clearDOM() {
  game.clearScores();
  generateGrid();
}
