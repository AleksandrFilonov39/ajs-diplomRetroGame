/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
import Team from "./Team";

export function* characterGenerator(allowedTypes, maxLevel) { 
  while (true) {
    const randomType = allowedTypes[Math.floor((Math.random() * allowedTypes.length))];
    const randomLevel =   Math.ceil(Math.random() * maxLevel)
    yield new randomType(randomLevel);
  } 
  
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const playerGenerator = characterGenerator(allowedTypes, maxLevel)
  const characters = [];
  for (let i = 1; i <= characterCount; i++) {
    characters.push(playerGenerator.next().value);
  }
  const team = new Team (characters)
  return team;
}


