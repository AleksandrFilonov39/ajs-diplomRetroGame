import themes from './themes.js';
import PositionedCharacter from './PositionedCharacter.js';
import Bowman from './characters/Bowman.js';
import Swordsman from './characters/Swordsman.js';
import Magician from './characters/Magician.js';
import Daemon from './characters/Daemon.js';
import Undead from './characters/Undead.js';
import Vampire from './characters/Vampire.js';
import { generateTeam } from './generators.js';
import GameState from './GameState.js';
import cursors from './cursors.js';
import { getAllPositionsToMove } from './utils.js'; 
import GamePlay from './GamePlay.js';


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playersType = [Bowman, Swordsman, Magician];
    this.enemyType = [Daemon, Undead, Vampire];
    this.allPositions = [];
    this.enemyPosition = [];
    this.playerPosition = [];
    this.redDrawPositionsArr = [];
    this.gameState = new GameState();
    this.theme;

    this.onCellEnter = this.onCellEnter.bind(this);
    this.onCellLeave = this.onCellLeave.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
  }

  init() {
    this.newGame() ;

    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellLeave); 
    this.gamePlay.addCellClickListener(this.onCellClick);

    this.gamePlay.addNewGameListener(() => {
      this.redDrawPositionsArr = [];
      this.gameState = GameState.from({...new GameState(), score: this.gameState.score});
      this.newGame(); 
    });

    this.gamePlay.addSaveGameListener(() => {
      this.gameState = GameState.from({...this.gameState, redDrawPositionsArr: this.redDrawPositionsArr});
      this.stateService.save(this.gameState)
    });

    this.gamePlay.addLoadGameListener(() => {
      let state = this.stateService.load(this.gameState);
      if(state) {
      this.gameState = state;
      this.redDrawPositionsArr = state.redDrawPositionsArr;
      this.updatePosition ();
      this.drowBoard ();
      this.gamePlay.redrawPositions(this.redDrawPositionsArr)
      }  else {
        GamePlay.showMessage('Вы не сохраняли игру, данные отсутствуют!')
      }
    });

  }

  newGame () {
    this.drowBoard ();
    const userTeam = generateTeam(this.playersType, 2, 2);
    const enemyTeam = generateTeam(this.enemyType, 2, 2)    
    this.redDrawPositionsArr = [
      ...this.redDrawPositionsArr, 
      ...this.PositionedCharStart(userTeam, this.createStartPositions('player')),
      ...this.PositionedCharStart(enemyTeam, this.createStartPositions('enemy'))
    ]
    this.gamePlay.redrawPositions(this.redDrawPositionsArr) 
  }

  createStartPositions(teamType, count = 2) {
    const size = 8;
    const boardSize = size * size;
    let positionArr = [];

    if (teamType === 'player') {
      for (let i = 0; i < boardSize; i++) {
        const pos = i % size;
        if(pos === 0 || pos === 1) {
          positionArr.push(i)
        }
      }
    } else {
      for (let i = 0; i < boardSize; i++) {
        const pos = i % size;
        if(pos === size - 2 || pos === size - 1){
          positionArr.push(i);
        }
      }
    }

    const result = [];

    while (result.length < count && positionArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * positionArr.length);
      const selectedPos = positionArr.splice(randomIndex, 1)[0];
      result.push(selectedPos);
    }
    this.allPositions = [...this.allPositions, ...result];

    if (teamType === 'player') {
      this.playerPosition = [...result];
    }

    if (teamType === 'enemy') {
      this.enemyPositions = [...result];
    }

    return result;
  }

  PositionedCharStart (obj, arrPosition) {
    const positionedChar = [];
    for (let i = 0; i < obj.characters.length; i++) {
      positionedChar.push(new PositionedCharacter(obj.characters[i], arrPosition[i]));
    }
    return positionedChar;
  }

  onCellClick(index) {

    if(this.gameState.endGame) return;

    const playersCharType = ['bowman', 'swordsman', 'magician'];
    const [char] = this.redDrawPositionsArr.filter((el) => el.position === index);

    const allPositionsToMove = getAllPositionsToMove(this.gameState.character?.type, this.gameState.positionedCharacters, 'move');
    const allPositionsToAttack = getAllPositionsToMove(this.gameState.character?.type, this.gameState.positionedCharacters, 'attack');

    if(char) {
      this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected'));
      const [playerChar] = playersCharType.filter((el) => el === char.character.type);
      if (playerChar) {
        this.gamePlay.selectCell(index, 'yellow');
        this.gameState = GameState.from({...this.gameState, positionedCharacters: index, character: char.character});
      }
    } 
     if(allPositionsToMove.includes(index) && !this.enemyPosition.includes(index)) {
      const findElement = this.redDrawPositionsArr.find(el => el.position === this.gameState.positionedCharacters)
      if(findElement && !this.allPositions.includes(index)) {
        findElement.position = index;
        this.gameState = GameState.from({...this.gameState, player: false});
        this.updatePosition ();
      }
      this.gamePlay.redrawPositions(this.redDrawPositionsArr);
      this.gamePlay.deselectCell(this.gameState.positionedCharacters); 
      this.computerAtack();

    }else if (allPositionsToAttack.includes(index) && this.enemyPosition.includes(index)) {

      const findElement = this.redDrawPositionsArr.find(el => el.position === index)
      if (this.gameState.player) {
        this.attack(this.gameState.character, findElement, index)
        this.gameState = GameState.from({...this.gameState, player: false});
      }
    }
    
    if(!char && !allPositionsToMove.includes(index) && !this.enemyPosition.includes(index)) {
      GamePlay.showError('hi i am an error');
    }
  }

  onCellEnter(index) {

    if(this.gameState.endGame) return;

     const allPositionsToMove = getAllPositionsToMove(this.gameState.character?.type, this.gameState.positionedCharacters, 'move');
     const allPositionsToAttack = getAllPositionsToMove(this.gameState.character?.type, this.gameState.positionedCharacters, 'attack');

    const [char] = this.redDrawPositionsArr.filter((el) => el.position === index)

    if(char){
      this.gamePlay.showCellTooltip(`🎖${char.character.level} ⚔${char.character.attack} 🛡${char.character.defence} ❤${char.character.health}`, index);
      if(this.gameState.positionedCharacters !== index) {
        this.gamePlay.setCursor(cursors.pointer)
      }
    }   
    
    if(allPositionsToMove.includes(index)) {
      this.gamePlay.setCursor(cursors.pointer);
      this.gamePlay.selectCell(index, 'green');
    }

    if(allPositionsToAttack.includes(index) && this.enemyPosition.includes(index)) {
      this.gamePlay.setCursor(cursors.crosshair);
      this.gamePlay.selectCell(index, 'red');
    } else if (this.enemyPosition.includes(index) && !allPositionsToAttack.includes(index)) {
      this.gamePlay.setCursor(cursors.notallowed);
    }
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index)
    this.gamePlay.setCursor(cursors.auto)
    this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-red'));
    this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-green'));
  }

  async attack(attacker, target, index) {
    if (!target) {
      return;
    }
    const {character} = target
    const damage = Math.max(attacker.attack - character.defence, attacker.attack * 0.1);
    
     if (!attacker || !character || target.character.health <= 0) return;

        try {
          await this.gamePlay.showDamage(index, damage)

          if(['daemon', 'undead', 'vampire'].includes(character.type)){
            this.gameState = GameState.from({...this.gameState, score: this.gameState.score + damage});
          }
          character.health -= damage;
          
          this.redDrawPositionsArr = this.redDrawPositionsArr.filter((el) => el.character.health > 0)
          this.updatePosition ();
            if(this.enemyPosition.length === 0) {
              this.levelUp(this.redDrawPositionsArr)
              if(this.redDrawPositionsArr.length === 1) {
                this.addOneUnitForPlayer ()
              }
              const newPositionForNewLevel = this.createStartPositions('player');
              for (let i = 0; i < this.redDrawPositionsArr.length; i++) {
                this.redDrawPositionsArr[i].position = newPositionForNewLevel[i];
              }
            this.gameState =  GameState.from({...this.gameState, level: this.gameState.level + 1});
            this.updatePosition();
            if(this.gameState.level > 3) {
              this.gameState = GameState.from({...this.gameState, endGame: true});
              GamePlay.showMessage('Поздравляем вы прошли игру, начните новую нажав кнопку New game')
            }
            this.generateNewEnemyTeam ();
            this.drowBoard ();
            this.gameState = GameState.from({...this.gameState, positionedCharacters: [],  player: true});
            this.updatePosition ();
          } else if(this.playerPosition.length === 0) {
            this.gameState = GameState.from({...this.gameState, endGame: true});
            GamePlay.showMessage('Вас победил компьютер, бывает, начните новую нажав кнопку New game')
          }
          await  this.gamePlay.redrawPositions(this.redDrawPositionsArr);
          this.computerAtack();
        } catch (err) {
          console.log(err)
        }
  }

   addOneUnitForPlayer () {
    const userTeam = generateTeam(this.playersType, 2, 1);
    this.redDrawPositionsArr = [...this.redDrawPositionsArr, ...this.PositionedCharStart(userTeam, [0])]
  }

  levelUp (arr) {
   return arr.forEach((char) => {
        char.character.level = (char.character.level + 1);
        char.character.attack = Math.max(char.character.attack, char.character.attack * (80 + char.character.health) / 100);
        char.character.defence = Math.max(char.character.defence, char.character.defence * (80 + char.character.health) / 100);
        char.character.health = (char.character.health + 80) > 100? 100 : char.character.health + 80;
      })
  }

  updatePosition () {
    this.enemyPosition = this.redDrawPositionsArr
        .filter(char => ['daemon', 'undead', 'vampire'].includes(char.character.type))
        .map(char => char.position); 

    this.playerPosition = this.redDrawPositionsArr
        .filter(char => ['bowman', 'swordsman', 'magician'].includes(char.character.type))
        .map(char => char.position); 

    this.allPositions = this.redDrawPositionsArr.map(char => char.position);
  }

 computerAtack () {
  
    const enemyTeam = this.redDrawPositionsArr.filter((el) => el.character.type === 'daemon' || el.character.type === 'undead' || el.character.type === 'vampire');
    const playerTeam = this.redDrawPositionsArr.filter((el) => el.character.type === 'bowman' || el.character.type === 'swordsman' || el.character.type === 'magician');
    enemyTeam.forEach((el) => {

      const allPositionsToAttack = getAllPositionsToMove(el.character?.type, el.position, 'attack');
      const allPositionsToMove = getAllPositionsToMove(el.character?.type, el.position, 'move');
      playerTeam.forEach((pos) => {

        if(!this.gameState.player) {
            if(allPositionsToAttack.includes(pos.position)) {
              this.attack(el.character, pos, pos.position);
              this.gameState = GameState.from({...this.gameState, player: true});

            } else if(!allPositionsToAttack.includes(pos.position)) {

              const closestPlayerTeammate = playerTeam.reduce((prev, curr) => 
              Math.abs(curr.position - el.position) < Math.abs(prev.position - el.position) ? curr : prev);

              const enemy = this.redDrawPositionsArr.find((enemyPos) => enemyPos.position === el.position);
              this.updatePosition ()
              enemy.position = this.findClosestNumber (allPositionsToMove, closestPlayerTeammate.position, this.allPositions)
              this.gamePlay.redrawPositions(this.redDrawPositionsArr);
              this.gameState = GameState.from({...this.gameState, player: true});
            }
        }
      })
    })
  }

  findClosestNumber (arr, number, positions) {
    if (arr.length === 0) return null;

    const availablePositions = arr.filter(pos => !positions.includes(pos));
    if (availablePositions.length === 0) return null;

    let closest = availablePositions[0];
    let dif = Math.abs(number - closest);
    availablePositions.forEach((el) => {
      const currentDif =  Math.abs(number - el);
       if(currentDif < dif) {
        dif = currentDif;
          closest = el;
      }
    })
    return closest;
  }

  drowBoard () {
      if(this.gameState.level === 0) {
      this.theme = themes.prairie;
    }else if (this.gameState.level === 1) {
      this.theme = themes.desert;
    }else if (this.gameState.level === 2) {
      this.theme = themes.arctic;
    }else if (this.gameState.level === 3) {
      this.theme = themes.mountain;
    }
    this.gamePlay.drawUi(this.theme);
  }

  generateNewEnemyTeam () {
    const newEnemyTeam = generateTeam(this.enemyType, 3, 2);
    newEnemyTeam.characters.forEach((el) => {
      if(el.level === 3) {
        el.attack = el.attack * 2;
        el.defence = el.defence * 2;
      }else if(el.level === 2) {
        el.attack = el.attack * 1.5;
        el.defence = el.defence * 1.5;
      }
    })
    this.redDrawPositionsArr = [
      ...this.redDrawPositionsArr, 
      ...this.PositionedCharStart(newEnemyTeam, this.createStartPositions('enemy'))
    ]
    this.gamePlay.redrawPositions(this.redDrawPositionsArr);
  }

}
