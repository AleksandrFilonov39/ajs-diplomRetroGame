import Character from "../Character";
import Bowman from "../characters/Bowman";
import Swordsman from "../characters/Swordsman";
import Magician from "../characters/Magician";
import { characterGenerator, generateTeam } from '../generators';

test('create new Character', () => {
    expect(() => {
        new Character (1);
    }).toThrow('Это базовый класс, объекты этого класса создавать нельзя');
})

test('create new Bowman and check level', () => {
    const bowman = new Bowman(1)
    expect(bowman.level).toBe(1);
})

test('create 10 charecters', () => {
    let arr = []
    const type = [Bowman, Swordsman, Magician];
    for (let i = 0; i < 10; i++) {
        arr.push(characterGenerator(type, 2))
    }
    expect(arr.length).toBe(10);
})

test('create 2 charecters 2 level', () => {
    const type = [Bowman, Swordsman, Magician];
    const res = generateTeam(type, 2, 2);
    expect(res.characters.length).toBe(2);
})

test('show the cellTooltip', () => {
    const bowman = new Bowman(1)
    expect(`🎖${bowman.level} ⚔${bowman.attack} 🛡${bowman.defence} ❤${bowman.health}`).toBe('🎖1 ⚔25 🛡25 ❤50');
})






