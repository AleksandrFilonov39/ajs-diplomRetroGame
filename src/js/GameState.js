export default class GameState {
  constructor() {
    this.currentTurn = 'player'; 
    this.positionedCharacters = [];
    this.character = null;
    this.player = true;
    this.level = 0;
    this.endGame = false;
    this.score = 0;
    this.redDrawPositionsArr = []
  }

  static from(object) {
    const gameState = new GameState();

    for(let key in object) {
      gameState[key] = object[key]
    }
    return gameState;
  }
}
