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

  // perhaps this is not necessary... just put it in game.js
  winGame() {
    this.wins += 1;
  }
}
