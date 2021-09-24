class Game {
  constructor() {
    this.player1 = new Player(1, '🦉');
    this.player2 = new Player(2, '🦝');
    this.board = ["", "", "", "", "", "", "" ,"" ,""]; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8] will correspond to sections on gameboard
    // for use in same selection error handling... not functional yet
    // this.occupied = [];
    this.turn = this.player1;
    this.win = false;
  }

  playGame() {
    console.log(this.board);
    // loops through max number of turns in a game (does not factor in same selection turns... will need update once functional)
      // could I just reset the middle loop condition to this.board.includes('')? Then check for draw would need to be outside the loop.
    for (var i = 0; i < 9; i++) {
      if (!this.win) {

        // preliminary error handling for when a spot is already taken by a token. ONLY WORKS ONCE, needs refactoring... a while loop?
        if (this.board[play] === "") {
          this.board[play] = this.turn.token;
        } else {
          var play = this.turn.takeTurn(this);
          this.board[play] = this.turn.token;
        }

        // var play = this.turn.takeTurn(this);
        // this.board[play] = this.turn.token;

        console.log(this.board);
        this.toggleTurn();
        this.checkForWin();
        this.checkForDraw();

      } else if (this.win) {
        this.processWin(this.winningToken);
        return;
      }
    }
  }

  toggleTurn() {
    if (this.turn === this.player1)  {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
    // DOM - toggle a turn class? Or just update innerText of h1 based on the property value after it runs?
  }

  checkForWin() {
    // needs to be further refactored.
    var winningNumbers = [0, 1, 2, 3, 6];

    for (var i = 0; i < winningNumbers.length; i++) {
      var boardValue = winningNumbers[i];
      // horizontal
      if (i === 0 || i === 3 || i === 4) {
        if (this.board[boardValue] !== "") {
          var num1 = this.board[boardValue];
          var num2 = this.board[boardValue + 1];
          var num3 = this.board[boardValue + 2];
          // console.log(num1, num2, num3);
          if (num1 === num2 && num1 === num3) {
            this.win = true;
            // sets new property to the token that is in the winning spots. This is used in the processWin() function
            this.winningToken = this.board[boardValue];
            // return this.board[boardValue];
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
            this.win = true;
            this.winningToken = this.board[boardValue];
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
              this.win = true;
              this.winningToken = this.board[boardValue];
            }
          } else if (i === 2) {
            var num1 = this.board[boardValue];
            var num2 = this.board[boardValue + 2];
            var num3 = this.board[boardValue + 4];
            console.log(num1, num2, num3);
            if (num1 === num2 && num1 === num3) {
              this.win = true;
              this.winningToken = this.board[boardValue];
            }
          }
        }
      }
    }

    // An attempt that needs debugging...
    // Use conditional logic to set num1, 2, & 3 based on boardValue. Then go into comparing them ??

    // for (var i = 0; i < winningNumbers.length; i++) {
    //   var boardValue = winningNumbers[i];
    //   var num1 = this.board[boardValue];
    //
    //   var horizNum2 = [num1 + 1]
    //   var horizNum3 = [num1 + 2]
    //
    //   var vertNum2 = [num1 + 3]
    //   var vertNum3 = [num1 + 6]
    //
    //   var diag1Num2 = [num1 + 4]
    //   var diag1Num3 = [num1 + 8]
    //
    //   var diag2Num2 = [num1 + 2]
    //   var diag2Num3 = [num1 + 4]
    //
    //   if (i === 0 || i === 3 || i === 4) {
    //     if (num1 !== "") {
    //       if (num1 === horizNum2 && num1 === horizNum3) {
    //         this.win = true;
    //         this.winningToken = this.board[boardValue];
    //       }
    //     }
    //   }
    //   if (i === 0 || i === 1 || i === 2) {
    //     if (num1 !== "") {
    //       if (num1 === vertNum2 && num1 === vertNum3) {
    //         this.win = true;
    //         this.winningToken = this.board[boardValue];
    //       }
    //     }
    //   }
    // }
  }

  // winning numbers: 0, 1, 2, 3, 6
    // 0: horizontal, vertical, diagonal
    // 1: vertical
    // 2: vertical, diagonal
    // 3: horizontal
    // 6: horizontal

// draw 0 2 3 4 7
// draw 1 5 6 8

  processWin(winningToken) {
    if (Object.values(this.player1).includes(winningToken)) {
      console.log('player1 wins!');
      this.player1.winGame();
    } else if (Object.values(this.player2).includes(winningToken)) {
      console.log('player2 wins!');
      this.player2.winGame();
    }
  }

  checkForDraw() {
    if (!this.board.includes('')) {
      console.log('Nobody wins, it\'s a draw!')
      return true;
      // if true, DOM should update accordingly. Check demo.
    } else {
      return false;
    }
  }

  resetGame() {
    this.board = ["", "", "", "", "", "", "" ,"" ,""];
    this.turn = this.player1;
    console.log(this.board);
    // main.js will handle resetting DOM.
    // research timeout for when to call this and restart playGame()
  }
}

var game1 = new Game;
game1.playGame();
game1.resetGame();
