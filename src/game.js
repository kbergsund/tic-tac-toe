class Game {
  constructor() {
    this.player1 = new Player(1, '🦉');
    this.player2 = new Player(2, '🦝');
    this.board = ["", "", "", "", "", "", "" ,"" ,""];
    this.turn = this.player1;
  }

  takeTurn(tileClicked) {
    if (this.board[tileClicked] === "") {
      this.board[tileClicked] = this.turn.token;
    } else {
      console.log('access denied');
      // toggleTurn() is called twice- double negative (here and in main.js) -as error handling solution.
      this.toggleTurn();
    }
  }

  toggleTurn() {
    if (this.turn === this.player1)  {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }

  checkForWin() {
    var winningNumbers = [0, 1, 2, 3, 6];

    for (var i = 0; i < winningNumbers.length; i++) {
      if (i === 0) {
        var a = 1;
        var b = 2;
        var c = 3;
        var d = 6;
        var e = 4;
        var f = 8;
      } else if (i === 1) {
        var c = 3;
        var d = 6;
      } else if (i === 2) {
        var c = 3;
        var d = 6;
        var e = 2;
        var f = 4;
      } else if (i === 3 || i === 4) {
        var a = 1;
        var b = 2
      }

      var num1 = winningNumbers[i];
      var boardValue = this.board[num1];
      var num2 = this.board[num1 + a];
      var num3 = this.board[num1 + b];
      var num4 = this.board[num1 + c];
      var num5 = this.board[num1 + d];
      var num6 = this.board[num1 + e];
      var num7 = this.board[num1 + f];

      if (boardValue !== "") {
        // horizontal
        if (boardValue === num2 && boardValue === num3) {
          this.winningToken = boardValue;
          return true;
        // vertical
        } else if (boardValue === num4 && boardValue === num5) {
          this.winningToken = boardValue;
          return true;
        // diagonal
        } else if (boardValue === num6 && boardValue === num7) {
          this.winningToken = boardValue;
          return true;
        }
      }
    }
  }

  processWin(winningToken) {
    if (Object.values(this.player1).includes(winningToken)) {
      this.player1.winGame();
      return this.player1.id;
    } else if (Object.values(this.player2).includes(winningToken)) {
      this.player2.winGame();
      return this.player2.id;
    }
  }

  checkForDraw() {
    if (!this.board.includes('')) {
      return true;
    } else {
      return false;
    }
  }

  resetGame() {
    this.board = ["", "", "", "", "", "", "" ,"" ,""];
    this.turn = this.player1;
  }
}
