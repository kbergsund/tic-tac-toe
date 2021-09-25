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
  // each article class matches to index of data model array
  // sets variable rather than chaining together childNodes.childNodes
  // if (!game.win) {
    var grid = gameBoard.childNodes[3];
    var tileClicked = event.target.className;
    game.takeTurn(tileClicked);

    // for testing
    console.log(game.board);

    // loops through childNodes of grid. If child node class name matches the event target classname, that becomes the tile to update. Links DOM with event target. And then loops in data model in innerHTML to update.
    for (var i = 0; i < grid.childNodes.length; i++) {
      var tileToUpdate = grid.childNodes[i];
      var tileNumber = grid.childNodes[i].className
      if (tileNumber === tileClicked) {
        tileToUpdate.innerHTML = `<p>${game.board[tileNumber]}<p>`
      }
    }

    game.checkForWin();
    if (game.win) {
      game.processWin(game.winningToken);
    } else {
      game.checkForDraw();
    }
    console.log(game.win);
    game.toggleTurn();
    gameBoard.childNodes[1].innerText = `It's ${game.turn.token}'s turn`;
}
