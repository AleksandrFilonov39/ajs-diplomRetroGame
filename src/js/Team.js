/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  // TODO: write your logic here
  constructor (characters) {
    this.characters = characters;
  }

  levelUp (arr) {
   return arr.forEach((char) => {
        char.character.level = (char.character.level + 1);
        char.character.attack = Math.max(char.character.attack, char.character.attack * (80 + char.character.health) / 100);
        char.character.defence = Math.max(char.character.defence, char.character.defence * (80 + char.character.health) / 100);
        char.character.health = (char.character.health + 80) > 100? 100 : char.character.health + 80;
      })
  }
} 
