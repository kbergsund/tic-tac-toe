class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedObject = JSON.stringify(this);
    var storedObject = localStorage.setItem(`${this.id}`, stringifiedObject);
  }

  retrieveWinsFromStorage() {
    var retrievedObject = localStorage.getItem(`${this.id}`);
    var parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
  }

  winGame() {
    this.wins += 1;
  }
}
