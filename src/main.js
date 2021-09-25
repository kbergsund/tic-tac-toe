var game = new Game();

var gameBoard = document.querySelector('#gameBoard');
var winCount = document.querySelectorAll('#winCount');

window.addEventListener('load', generateGrid);
gameBoard.addEventListener('click', playGame);

function generateGrid() {
  var grid = gameBoard.childNodes[3];
  grid.innerHTML = '';
  for (var i = 0; i < 9; i++) {
    gridIndex = i;
    grid.innerHTML += `
    <article class="${gridIndex}">
    </article>
    `
  }
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
    }
  }
}

function evaluateGame() {
  var header = gameBoard.childNodes[1]
  if (game.checkForWin()) {
    header.innerText = `${game.turn.token} wins!`;
    displayWin();
    game.resetGame();
    // need to set this on a timeout somehow (later iteration)
    // be sure to also reset header to whose turn it is.
    generateGrid();
  } else if (game.checkForDraw()) {
    header.innerText = 'It\'s a draw!';
    game.resetGame();
    generateGrid();
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
