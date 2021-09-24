class Game {
  constructor() {
    this.player1 = new Player(1, '🍓');
    this.player2 = new Player(2, '🍊');
    this.board = ["", "", "", "", "", "", "" ,"" ,""]; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8] will correspond to sections on gameboard
    this.turn = this.player1;
  }

  playGame() {
    // loops through max number of turns in a game
    for (var i = 0; i < 9; i++) {
      // if win is false
      if (!this.checkForWin()) {
        // calls method within Player. Drafted using prompt() right now while I am not touching the DOM. Player should input tile number where they want to place their token- this may move here or even to main.js eventually because I'll be using event delegation.
        var play = this.turn.takeTurn(this);
        // Sets element within board array- index corresponds to user input -to the player emoji.
        // preliminary error handling for when a spot is already taken by a token
        if (!this.board[play]) {
          this.board[play] = this.turn.token;
        } else {
          var play = this.turn.takeTurn(this);
        }
        console.log(this.board);
        this.toggleTurn();
        this.checkForWin();

        if (!this.board.includes('')) {
          console.log('draw ' + this.checkForDraw());
        }
      } else {
        console.log('win ' + this.checkForWin());
        // return this.checkForWin();
      }
    }
  }

  toggleTurn() {
    if (this.turn === this.player1)  {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
    // Invoke at the END of a turn, once player has clicked the tile they wish to place.
    // DOM - toggle a turn class? Or just update innerText of h1 based on the property value after it runs?
  }

  checkForWin() {
    this.win = false;

    // winning combinations:
      // horizontal: 0, 1, 2 ... 3, 4, 5 ... 6, 7, 8
      // vertical: 0, 3, 6 ... 1, 4, 7 ... 2, 5, 8
      // diagonal: 0, 4, 8 ... 2, 4, 6

    // numbers we need to check: 0, 1, 2, 3, 6
    // create array with these numbers.
      // loop through array. at each number, check if
      // we need some way to exclude nonwinning scenarios....
      // include conditional that match certain numbers.

    // should take in gameData and check for various winning combinations.
    // loop through array, check for matching values.
    // if condition is met, should add 1 to player wins
      // and perhaps return true? So that DOM can update accordingly.

  checkForDraw() {
    if (!this.checkForWin()) {
      return true;
    } else {
      return false;
    }
    // be invoked if checkForWin returns false and if there are no more empty spaces in the board array i.e. (length === 9)
      // if true, DOM should update accordingly.
  }

  resetGame() {
    // reset board & turns (main.js will handle resetting DOM)
  }
}

var game1 = new Game;
game1.playGame();
