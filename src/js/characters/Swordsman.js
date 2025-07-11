import Character from "../Character";

export default class Swordsman extends Character {
    constructor (level, type = 'swordsman') {
    super(level)
    
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.health = 50;
    this.type = type;

    this.moveDistance = 4;
    this.attackDistance = 1;
    }
}
