class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    // JSON.stringify();
    // localStorage.setItem();
  }

  retrieveWinsFromStorage() {
    // localStorage.getItem;
    // JSON.parse;
  }

  takeTurn(game) {
    var play = parseInt(prompt('Which tile?'));
    // Trying to refactor error handling when a spot is already taken. For some reason the play variable is not updating the second time takeTurn is called. Likely because I don't fully understand recursive function calls yet? May just have to be sorted while working on DOM.
    // if (game.board[play] === "") {
      // console.log('prompt value ' + play);
    return play;
    // } else {
    //   this.takeTurn(game);
  }

    winGame() {
      this.wins += 1;
      console.log(this.wins);
    }
}
