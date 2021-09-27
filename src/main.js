var game = new Game();

var gameBoard = document.querySelector('#gameBoard');
var winCount = document.querySelectorAll('#winCount');

window.addEventListener('load', generateGrid);
gameBoard.addEventListener('click', playGame);

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

function playGame() {
  updateGrid();
  evaluateGame();
}

function updateGrid() {
  var grid = gameBoard.childNodes[3];
  var tileClicked = event.target.className;
  game.takeTurn(tileClicked);
  for (var i = 0; i < grid.childNodes.length; i++) {
    var tileToUpdate = grid.childNodes[i];
    var tileNumber = grid.childNodes[i].className;
    if (tileNumber === tileClicked) {
      tileToUpdate.innerHTML = `<p>${game.board[tileNumber]}<p>`
      console.log(tileToUpdate.classList);
    }
  }
}

function persistWins() {
  for (var i = 0; i < 2; i++) {
    var player = i + 1;
    var winsToDisplay = game[`player${player}`].wins;
    winCount[i].childNodes[3].innerText = `${winsToDisplay} wins`;
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
  setTimeout(generateGrid, 1500);
}
