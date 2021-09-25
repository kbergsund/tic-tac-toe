var game = new Game();

var gameBoard = document.querySelector('#gameBoard');

window.addEventListener('load', generateGrid);
gameBoard.addEventListener('click', playGame);

// sets up grid rather than HTML having 9 empty articles
function generateGrid() {
  for (var i = 0; i < 9; i++) {
    gridIndex = i;
    gameBoard.childNodes[3].innerHTML += `
    <article class="${gridIndex}">
    </article>
    `
  }
}

function playGame() {
  updateDOM();
  evaluateGame();
}

function updateDOM() {
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
    game.processWin(game.winningToken);
    game.resetGame();
  } else if (game.checkForDraw()) {
    header.innerText = 'It\'s a draw!';
    game.resetGame();
  } else {
    game.toggleTurn();
    gameBoard.childNodes[1].innerText = `It's ${game.turn.token}'s turn`;
  }
}
