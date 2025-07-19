import Daemon from "../characters/Daemon";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";
import Bowman from "../characters/Bowman";
import Swordsman from "../characters/Swordsman";
import Magician from "../characters/Magician";
import { getAllPositionsToMove } from "../utils";

test('create new Bowman and check positions to move', () => {
   // getAllPositionsToMove(gameStateType, positionedCharacters(index), type(move/attack))
    const bowman = new Bowman(1);
    const correctPositions = [16, 18, 19, 8, 9, 1, 10, 3, 25, 33, 24, 26, 35];
    const positions = getAllPositionsToMove(bowman, 17, 'move'); 
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Bowman and check positions to attack', () => {
    const bowman = new Bowman(1);
    const correctPositions = [16, 18, 19, 8, 9, 1, 10, 3, 25, 33, 24, 26, 35];
    const positions = getAllPositionsToMove(bowman, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Vampire and check positions to move', () => {
    const vampire = new Vampire(1);
    const correctPositions = [16, 18, 19, 8, 9, 1, 10, 3, 25, 33, 24, 26, 35];
    const positions = getAllPositionsToMove(vampire, 17, 'move');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Vampire and check positions to attack', () => {
    const vampire = new Vampire(1);
    const correctPositions = [16, 18, 19, 8, 9, 1, 10, 3, 25, 33, 24, 26, 35];
    const positions = getAllPositionsToMove(vampire, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Swordsman and check positions to move', () => {
    const swordsman = new Swordsman(1)
    const correctPositions = [16, 18, 19, 20, 21, 9, 1, 8, 10, 3, 25, 33, 41, 49, 24, 26, 35, 44, 53];
    const positions = getAllPositionsToMove(swordsman, 17, 'move');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Swordsman and check positions to attack', () => {
    const swordsman = new Swordsman(1)
    const correctPositions = [16, 18, 9, 25, 8, 10, 24, 26];
    const positions = getAllPositionsToMove(swordsman, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})


test('create new Undead and check positions to move', () => {
    const undead = new Undead(1)
    const correctPositions = [16, 18, 19, 20, 21, 9, 1, 8, 10, 3, 25, 33, 41, 49, 24, 26, 35, 44, 53];
    const positions = getAllPositionsToMove(undead, 17, 'move');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Undead and check positions to attack', () => {
    const undead = new Undead(1)
    const correctPositions = [16, 18, 9, 25, 8, 10, 24, 26];
    const positions = getAllPositionsToMove(undead, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Daemon and check positions to move', () => {
    const daemon = new Daemon(1)
    const correctPositions = [16, 18, 9, 25, 8, 10, 24, 26];
    const positions = getAllPositionsToMove(daemon, 17, 'move');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Daemon and check positions to attack', () => {
    const daemon = new Daemon(1)
    const correctPositions = [16, 18, 19, 20, 21, 9, 1, 8, 10, 3, 25, 33, 41, 49, 24, 26, 35, 44, 53];
    const positions = getAllPositionsToMove(daemon, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Magician and check positions to move', () => {
    const magician = new Magician(1)
    const correctPositions = [16, 18, 9, 25, 8, 10, 24, 26];
    const positions = getAllPositionsToMove(magician, 17, 'move');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})

test('create new Magician and check positions to attack', () => {
    const magician = new Magician(1)
    const correctPositions = [16, 18, 19, 20, 21, 9, 1, 8, 10, 3, 25, 33, 41, 49, 24, 26, 35, 44, 53];
    const positions = getAllPositionsToMove(magician, 17, 'attack');
    let result = correctPositions.filter(el => !positions.includes(el));
    let result2 = positions.filter(el => !correctPositions.includes(el));
    expect(result.length + result2.length).toBe(0);
})