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
    // Drafted using prompt() right now prior to DOM manipulation. Will ultimately be done using event delegation. May move to main.js?
    var play = parseInt(prompt('Which tile?'));
    return play;

    // Trying to refactor error handling when a spot is already taken. For some reason, the play variable is not updating the second time takeTurn is called- the token will be added to the board array at an undefined index... Likely because I don't fully understand recursive function calls yet? May just have to be sorted while working on DOM.
    // if (game.board[play] !== "") {
    // if (game.occupied.includes(play)) {
    //   this.takeTurn(game);
    // } else {
    //   console.log(play);
    //   game.occupied.push(play);
    //   console.log(game.occupied);
    //   return play;
    // }

  }

    winGame() {
      this.wins += 1;
      console.log(this.wins);
    }
}
