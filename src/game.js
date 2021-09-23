class Game {
  constructor() {
    this.player1 = new Player(1, '🍓');
    this.player2 = new Player(2, '🍊');
    this.gameData = []; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8] corresponds to sections on gameboard
    this.turn = this.player1.id;
  }

  toggleTurn() {
    if (this.turn === player1.id)  {
      this.turn = player2.id;
    } else {
      this.turn = player1.id;
    }
    //v1 of conditional that goes back and forth. Should be called at the END of a turn, once player has clicked the tile they wish to place.
    // DOM - toggle a turn class? Or just update innerText of h1 based on the property value after it runs?
  }

  checkForWin() {
    // should take in gameData and check for various winning combinations.
    // loop through array, check for matching values.
      // Is there a way to do this other than programming in every winning solution?
        // i.e. [ 1.id, 1.id, 1.id, ....] [1.id, x, x, 1.id, x, x, 1.id ....]
        // ^ use math with index numbers to see if [i + 1] or [i + 2] match. Diagonal win would be [i + 3]
    // if condition is met, should add 1 to player wins
      // and perhaps return true? So that DOM can update accordingly.
  }

  checkForDraw() {
    // be invoked if checkForWin returns false?
    // or draw() should check if there are no more empty spaces in the gameData array i.e. (length === 9)
      // if true, DOM should update accordingly?
  }

  resetGame() {
    // reset gameData & turns (main.js will handle resetting DOM)
  }
}

var game1 = new Game;
