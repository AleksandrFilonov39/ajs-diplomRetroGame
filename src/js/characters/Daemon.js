import Character from "../Character";

export default class Daemon extends Character {
    constructor (level) {
    super(level)
    
    this.level = level;
    this.attack = 10;
    this.defence = 10;
    this.health = 50;
    this.type = 'daemon';

    this.moveDistance = 1;
    this.attackDistance = 4;
    }
}
