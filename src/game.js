class Game {
  constructor(player1, player2) {
    this.player1 = new Player(1, '🦉');
    this.player2 = new Player(2, '🦝');
    this.board = ["", "", "", "", "", "", "" ,"" ,""];
    this.turn = this.player1;
  }

  takeTurn(tileClicked) {
    if (this.board[tileClicked] === "") {
      this.board[tileClicked] = this.turn.token;
    } else {
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
      var num1 = winningNumbers[i];
      var boardValue = this.board[num1];
      var num2 = this.board[num1 + 1];
      var num3 = this.board[num1 + 2];
      var num4 = this.board[num1 + 3];
      var num5 = this.board[num1 + 6];
      if (i === 0) {
        var num6 = this.board[num1 + 4];
        var num7 = this.board[num1 + 8];
      } else if (i === 2) {
        var num6 = this.board[num1 + 2];
        var num7 = this.board[num1 + 4];
      }

      if (boardValue !== "") {
        if (i === 0 || i === 3 || i === 4) {
          if (boardValue === num2 && boardValue === num3) {
            this.winningToken = boardValue;
            this.win = true;
            return true;
          }
        }
        if (i === 0 || i === 1 || i === 2) {
          if (boardValue === num4 && boardValue === num5) {
            this.winningToken = boardValue;
            this.win = true;
            return true;
          }
        }
        if (i === 0 || i === 2) {
          if (boardValue === num6 && boardValue === num7) {
            this.winningToken = boardValue;
            this.win = true;
            return true;
          }
        }
      }
    }
  }

  checkForDraw() {
    if (!this.board.includes('')) {
      this.draw = true;
      return true;
    } else {
      return false;
    }
  }

  processWin(winningToken) {
    if (Object.values(this.player1).includes(winningToken)) {
      var winnerID = this.player1.id;
    } else if (Object.values(this.player2).includes(winningToken)) {
      var winnerID = this.player2.id;
    }

    var interpolatedWinner = `player${winnerID}`;
    this[interpolatedWinner].winGame();
    this.player1.saveWinsToStorage();
    this.player2.saveWinsToStorage();
    return winnerID;
  }

  resetGame() {
    this.board = ["", "", "", "", "", "", "" ,"" ,""];
    this.turn = this.player1;
    this.win = false;
    this.draw = false;
    if (localStorage.length !== 0) {
      var player1Refresh = game.player1.retrieveWinsFromStorage();
      game.player1.wins = player1Refresh.wins;
      var player2Refresh = game.player2.retrieveWinsFromStorage();
      game.player2.wins = player2Refresh.wins;
    }
  }

  clearScores() {
    localStorage.clear();
    this.player1.wins = 0;
    this.player2.wins = 0;
  }
}
