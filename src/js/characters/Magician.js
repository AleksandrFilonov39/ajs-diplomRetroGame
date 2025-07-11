import Character from "../Character";

export default class Magician extends Character {
    constructor (level, type = 'magician') {
    super(level)
    
    this.level = level;
    this.attack = 10;
    this.defence = 40;
    this.health = 50;
    this.type = type;
    
    this.moveDistance = 1;
    this.attackDistance = 4;
    }
}
