import Character from "../Character";

export default class Vampire extends Character {
    constructor (level, type = 'vampire') {
    super(level)
    
    this.level = level;
    this.attack = 10;
    this.defence = 10;
    this.health = 50;
    this.type = type;
    }
}
