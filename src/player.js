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
    return play;
  }
}
