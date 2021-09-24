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

        // preliminary error handling for when a spot is already taken by a token. ONLY WORKS ONCE, needs refactoring...
        if (!this.board[play]) {
          this.board[play] = this.turn.token;
        } else {
          // Sets element within board array- index corresponds to user input -to the player emoji.
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
    // can be further refactored. Use conditional logic to set num1, 2, & 3 based on boardValue. Then go into comparing them.
    // this.win = false;
    var winningNumbers = [0, 1, 2, 3, 6];
    for (var i = 0; i < winningNumbers.length; i++) {
      var boardValue = winningNumbers[i];
      // horizontal
      if (i === 0 || i === 3 || i === 4) {
        if (this.board[boardValue] !== "") {
          var num1 = this.board[boardValue];
          var num2 = this.board[boardValue + 1];
          var num3 = this.board[boardValue + 2];
          console.log(num1, num2, num3);
          if (num1 === num2 && num1 === num3) {
            return true;
          }
        }
      }
      // vertical
      if (i === 0 || i === 1 || i === 2) {
        if (this.board[boardValue] !== "") {
          var num1 = this.board[boardValue];
          var num2 = this.board[boardValue + 3];
          var num3 = this.board[boardValue + 6];
          console.log(num1, num2, num3);
          if (num1 === num2 && num1 === num3) {
            return true;
          }
        }
      }
      // diagonal
      if (i === 0 || i === 2) {
        if (this.board[boardValue] !== "") {
          if (i === 0) {
            var num1 = this.board[boardValue];
            var num2 = this.board[boardValue + 4];
            var num3 = this.board[boardValue + 8];
            console.log(num1, num2, num3);
            if (num1 === num2 && num1 === num3) {
              return true;
            }
          } else if (i === 2) {
            var num1 = this.board[boardValue];
            var num2 = this.board[boardValue + 2];
            var num3 = this.board[boardValue + 4];
            console.log(num1, num2, num3);
            if (num1 === num2 && num1 === num3) {
              return true;
            }
          }
        }
      }
    }
  }

  // winning numbers: 0, 1, 2, 3, 6
    // 0: horizontal, vertical, diagonal
    // 1: vertical
    // 2: vertical, diagonal
    // 3: horizontal
    // 6: horizontal

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
