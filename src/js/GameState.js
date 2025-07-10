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
    gameState.currentTurn = object.currentTurn;
    gameState.positionedCharacters = object.positionedCharacters;
    gameState.character = object.character;
    gameState.player = object.player;
    gameState.level = object.level;
    gameState.endGame = object.endGame;
    gameState.score = object.score;
    gameState.redDrawPositionsArr = object.redDrawPositionsArr;
    return gameState;
  }
}
