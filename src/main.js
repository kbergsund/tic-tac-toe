// Query Selectors
var gameBoard = document.querySelector('#gameBoard');
var winCount = document.querySelectorAll('#winCount');

// Event Listeners
window.addEventListener('load', generateGrid);
gameBoard.addEventListener('click', playGame);
// gameBoard.addEventListener('click', clearDOM);

// Global Variables
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
    winCount[i].childNodes[3].innerText = `${winsToDisplay} wins`;
  }
}

function playGame() {
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
    console.log("tile number  " + tileNumber);
    if (tileNumber === tileClicked) {
      tileToUpdate.innerHTML = `<p>${game.board[tileNumber]}<p>`
      tileClicked.add('disabled');
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
    header.innerText = 'It\'s a draw!';
    resetPlay();
  } else {
    game.toggleTurn();
    gameBoard.childNodes[1].innerText = `It's ${game.turn.token}'s turn`;
  }
}

function displayWin() {
  var winnerID = game.processWin(game.winningToken);
  var interpolatedWinner = game[`player${winnerID}`].wins;
  winCount[winnerID - 1].childNodes[3].innerText = `${interpolatedWinner} wins`;
}

function resetPlay() {
  game.resetGame();
  setTimeout(generateGrid, 1800);
}

function clearDOM() {
  // if (event.target.type === 'button') {
    game.clearScores();
    generateGrid();
  // }
}
