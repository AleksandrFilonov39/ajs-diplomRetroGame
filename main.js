/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n//# sourceURL=webpack://js-advanced-diploma/./src/index.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\n/**\r\n * Базовый класс, от которого наследуются классы персонажей\r\n * @property level - уровень персонажа, от 1 до 4\r\n * @property attack - показатель атаки\r\n * @property defence - показатель защиты\r\n * @property health - здоровье персонажа\r\n * @property type - строка с одним из допустимых значений:\r\n * swordsman\r\n * bowman\r\n * magician\r\n * daemon\r\n * undead\r\n * vampire\r\n */\nclass Character {\n  constructor(level, type = 'generic') {\n    if (new.target === Character) {\n      throw new Error(\"Это базовый класс, объекты этого класса создавать нельзя\");\n    }\n    this.level = level;\n    this.attack = 0;\n    this.defence = 0;\n    this.health = 50;\n    this.type = type;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/Character.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.js */ \"./src/js/themes.js\");\n/* harmony import */ var _PositionedCharacter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionedCharacter.js */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/Bowman.js */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Swordsman.js */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Magician_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Magician.js */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Daemon.js */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/Undead.js */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/Vampire.js */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _generators_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generators.js */ \"./src/js/generators.js\");\n/* harmony import */ var _GameState_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GameState.js */ \"./src/js/GameState.js\");\n/* harmony import */ var _cursors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cursors.js */ \"./src/js/cursors.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n/* harmony import */ var _GamePlay_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GamePlay.js */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _Team_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Team.js */ \"./src/js/Team.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass GameController {\n  constructor(gamePlay, stateService) {\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n    this.playersType = [_characters_Bowman_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_Magician_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n    this.enemyType = [_characters_Daemon_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n    this.allPositions = [];\n    this.enemyPosition = [];\n    this.playerPosition = [];\n    this.redDrawPositionsArr = [];\n    this.gameState = new _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\n    this.theme;\n    this.team = new _Team_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]();\n    this.onCellEnter = this.onCellEnter.bind(this);\n    this.onCellLeave = this.onCellLeave.bind(this);\n    this.onCellClick = this.onCellClick.bind(this);\n  }\n  init() {\n    this.newGame();\n    this.gamePlay.addCellEnterListener(this.onCellEnter);\n    this.gamePlay.addCellLeaveListener(this.onCellLeave);\n    this.gamePlay.addCellClickListener(this.onCellClick);\n    this.gamePlay.addNewGameListener(() => {\n      this.redDrawPositionsArr = [];\n      this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n        ...new _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](),\n        score: this.gameState.score\n      });\n      this.newGame();\n    });\n    this.gamePlay.addSaveGameListener(() => {\n      this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n        ...this.gameState,\n        redDrawPositionsArr: this.redDrawPositionsArr\n      });\n      this.stateService.save(this.gameState);\n    });\n    this.gamePlay.addLoadGameListener(() => {\n      let state = this.stateService.load(this.gameState);\n      if (state) {\n        this.gameState = state;\n        this.redDrawPositionsArr = state.redDrawPositionsArr;\n        this.updatePosition();\n        this.drowBoard();\n        this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n      } else {\n        _GamePlay_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('Вы не сохраняли игру, данные отсутствуют!');\n      }\n    });\n  }\n  newGame() {\n    this.drowBoard();\n    const userTeam = (0,_generators_js__WEBPACK_IMPORTED_MODULE_8__.generateTeam)(this.playersType, 2, 2);\n    const enemyTeam = (0,_generators_js__WEBPACK_IMPORTED_MODULE_8__.generateTeam)(this.enemyType, 2, 2);\n    this.redDrawPositionsArr = [...this.redDrawPositionsArr, ...this.PositionedCharStart(userTeam, this.createStartPositions('player')), ...this.PositionedCharStart(enemyTeam, this.createStartPositions('enemy'))];\n    this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n  }\n  createStartPositions(teamType, count = 2) {\n    const size = 8;\n    const boardSize = size * size;\n    let positionArr = [];\n    if (teamType === 'player') {\n      for (let i = 0; i < boardSize; i++) {\n        const pos = i % size;\n        if (pos === 0 || pos === 1) {\n          positionArr.push(i);\n        }\n      }\n    } else {\n      for (let i = 0; i < boardSize; i++) {\n        const pos = i % size;\n        if (pos === size - 2 || pos === size - 1) {\n          positionArr.push(i);\n        }\n      }\n    }\n    const result = [];\n    while (result.length < count && positionArr.length > 0) {\n      const randomIndex = Math.floor(Math.random() * positionArr.length);\n      const selectedPos = positionArr.splice(randomIndex, 1)[0];\n      result.push(selectedPos);\n    }\n    this.allPositions = [...this.allPositions, ...result];\n    if (teamType === 'player') {\n      this.playerPosition = [...result];\n    }\n    if (teamType === 'enemy') {\n      this.enemyPositions = [...result];\n    }\n    return result;\n  }\n  PositionedCharStart(obj, arrPosition) {\n    const positionedChar = [];\n    for (let i = 0; i < obj.characters.length; i++) {\n      positionedChar.push(new _PositionedCharacter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj.characters[i], arrPosition[i]));\n    }\n    return positionedChar;\n  }\n  onCellClick(index) {\n    if (this.gameState.endGame) return;\n    this.allPositions.forEach(el => this.gamePlay.deselectCell(el));\n    const playersCharType = ['bowman', 'swordsman', 'magician'];\n    const [char] = this.redDrawPositionsArr.filter(el => el.position === index);\n    if (char) {\n      const [playerChar] = playersCharType.filter(el => el === char.character.type);\n      this.updatePosition();\n      if (playerChar) {\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          positionedCharacters: index,\n          character: char.character\n        });\n        this.gamePlay.selectCell(index, 'yellow');\n      }\n    }\n    const allPositionsToMove = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(this.gameState.character, this.gameState.positionedCharacters, 'move');\n    const allPositionsToAttack = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(this.gameState.character, this.gameState.positionedCharacters, 'attack');\n    if (allPositionsToMove.includes(index) && !this.enemyPosition.includes(index)) {\n      const findElement = this.redDrawPositionsArr.find(el => el.position === this.gameState.positionedCharacters);\n      if (findElement && !this.allPositions.includes(index)) {\n        findElement.position = index;\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          player: false\n        });\n        this.updatePosition();\n      }\n      this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n      this.computerAtack();\n    }\n    if (allPositionsToAttack.includes(index) && this.enemyPosition.includes(index)) {\n      const findElement = this.redDrawPositionsArr.find(el => el.position === index);\n      if (this.gameState.player) {\n        this.attack(this.gameState.character, findElement, index);\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          player: false\n        });\n      }\n    }\n    if (!char && !allPositionsToMove.includes(index) && !this.enemyPosition.includes(index)) {\n      _GamePlay_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showError('hi i am an error');\n    }\n  }\n  onCellEnter(index) {\n    if (this.gameState.endGame) return;\n    const [char] = this.redDrawPositionsArr.filter(el => el.position === index);\n    if (char) {\n      this.gamePlay.showCellTooltip(`🎖${char.character.level} ⚔${char.character.attack} 🛡${char.character.defence} ❤${char.character.health}`, index);\n      if (this.gameState.positionedCharacters !== index) {\n        this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].pointer);\n      }\n    }\n    if (!this.gameState.character) {\n      return;\n    }\n    const allPositionsToMove = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(this.gameState.character, this.gameState.positionedCharacters, 'move');\n    const allPositionsToAttack = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(this.gameState.character, this.gameState.positionedCharacters, 'attack');\n    if (allPositionsToMove.includes(index)) {\n      this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].pointer);\n      this.gamePlay.selectCell(index, 'green');\n    }\n    if (allPositionsToAttack.includes(index) && this.enemyPosition.includes(index)) {\n      this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].crosshair);\n      this.gamePlay.selectCell(index, 'red');\n    } else if (this.enemyPosition.includes(index) && !allPositionsToAttack.includes(index)) {\n      this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notallowed);\n    }\n  }\n  onCellLeave(index) {\n    this.gamePlay.hideCellTooltip(index);\n    this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auto);\n    if (index === this.gameState.positionedCharacters) {\n      return;\n    }\n    this.gamePlay.deselectCell(index);\n  }\n  async attack(attacker, target, index) {\n    if (!target) {\n      return;\n    }\n    const {\n      character\n    } = target;\n    const damage = Math.max(attacker.attack - character.defence, attacker.attack * 0.1);\n    if (!attacker || !character || target.character.health <= 0) return;\n    try {\n      await this.gamePlay.showDamage(index, damage);\n      if (['daemon', 'undead', 'vampire'].includes(character.type)) {\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          score: this.gameState.score + damage\n        });\n      }\n      character.health -= damage;\n      this.redDrawPositionsArr = this.redDrawPositionsArr.filter(el => el.character.health > 0);\n      this.updatePosition();\n      if (this.enemyPosition.length === 0) {\n        this.team.levelUp(this.redDrawPositionsArr);\n        if (this.redDrawPositionsArr.length === 1) {\n          this.addOneUnitForPlayer();\n        }\n        const newPositionForNewLevel = this.createStartPositions('player');\n        for (let i = 0; i < this.redDrawPositionsArr.length; i++) {\n          this.redDrawPositionsArr[i].position = newPositionForNewLevel[i];\n        }\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          level: this.gameState.level + 1\n        });\n        this.updatePosition();\n        if (this.gameState.level > 3) {\n          this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n            ...this.gameState,\n            endGame: true\n          });\n          _GamePlay_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('Поздравляем вы прошли игру, начните новую игру нажав кнопку New game');\n        }\n        this.generateNewEnemyTeam();\n        this.drowBoard();\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          positionedCharacters: [],\n          player: true\n        });\n        this.updatePosition();\n      } else if (this.playerPosition.length === 0) {\n        this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n          ...this.gameState,\n          endGame: true\n        });\n        _GamePlay_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('Вас победил компьютер, бывает, начните новую игру нажав кнопку New game');\n      }\n      await this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n      this.computerAtack();\n    } catch (err) {\n      console.log(err);\n    }\n  }\n  addOneUnitForPlayer() {\n    const userTeam = (0,_generators_js__WEBPACK_IMPORTED_MODULE_8__.generateTeam)(this.playersType, 2, 1);\n    this.redDrawPositionsArr = [...this.redDrawPositionsArr, ...this.PositionedCharStart(userTeam, [0])];\n  }\n  updatePosition() {\n    this.enemyPosition = this.redDrawPositionsArr.filter(char => ['daemon', 'undead', 'vampire'].includes(char.character.type)).map(char => char.position);\n    this.playerPosition = this.redDrawPositionsArr.filter(char => ['bowman', 'swordsman', 'magician'].includes(char.character.type)).map(char => char.position);\n    this.allPositions = this.redDrawPositionsArr.map(char => char.position);\n  }\n  computerAtack() {\n    const enemyTeam = this.redDrawPositionsArr.filter(el => el.character.type === 'daemon' || el.character.type === 'undead' || el.character.type === 'vampire');\n    const playerTeam = this.redDrawPositionsArr.filter(el => el.character.type === 'bowman' || el.character.type === 'swordsman' || el.character.type === 'magician');\n    enemyTeam.forEach(el => {\n      const allPositionsToAttack = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(el.character, el.position, 'attack');\n      const allPositionsToMove = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAllPositionsToMove)(el.character, el.position, 'move');\n      playerTeam.forEach(pos => {\n        if (!this.gameState.player) {\n          if (allPositionsToAttack.includes(pos.position)) {\n            this.attack(el.character, pos, pos.position);\n            this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n              ...this.gameState,\n              player: true\n            });\n          } else if (!allPositionsToAttack.includes(pos.position)) {\n            const closestPlayerTeammate = playerTeam.reduce((prev, curr) => Math.abs(curr.position - el.position) < Math.abs(prev.position - el.position) ? curr : prev);\n            const enemy = this.redDrawPositionsArr.find(enemyPos => enemyPos.position === el.position);\n            this.updatePosition();\n            enemy.position = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.findClosestNumber)(allPositionsToMove, closestPlayerTeammate.position, this.allPositions);\n            this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n            this.gameState = _GameState_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].from({\n              ...this.gameState,\n              player: true\n            });\n          }\n        }\n      });\n    });\n  }\n  drowBoard() {\n    if (this.gameState.level === 0) {\n      this.theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prairie;\n    } else if (this.gameState.level === 1) {\n      this.theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].desert;\n    } else if (this.gameState.level === 2) {\n      this.theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arctic;\n    } else if (this.gameState.level === 3) {\n      this.theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mountain;\n    }\n    this.gamePlay.drawUi(this.theme);\n  }\n  generateNewEnemyTeam() {\n    const newEnemyTeam = (0,_generators_js__WEBPACK_IMPORTED_MODULE_8__.generateTeam)(this.enemyType, 3, 2);\n    newEnemyTeam.characters.forEach(el => {\n      if (el.level === 3) {\n        el.attack = el.attack * 2;\n        el.defence = el.defence * 2;\n      } else if (el.level === 2) {\n        el.attack = el.attack * 1.5;\n        el.defence = el.defence * 1.5;\n      }\n    });\n    this.redDrawPositionsArr = [...this.redDrawPositionsArr, ...this.PositionedCharStart(newEnemyTeam, this.createStartPositions('enemy'))];\n    this.gamePlay.redrawPositions(this.redDrawPositionsArr);\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\nclass GamePlay {\n  constructor() {\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n  bindToDOM(container) {\n    if (!(container instanceof HTMLElement)) {\n      throw new Error('container is not HTMLElement');\n    }\n    this.container = container;\n  }\n\n  /**\r\n   * Draws boardEl with specific theme\r\n   *\r\n   * @param theme\r\n   */\n  drawUi(theme) {\n    this.checkBinding();\n    this.container.innerHTML = `\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    `;\n    this.newGameEl = this.container.querySelector('[data-id=action-restart]');\n    this.saveGameEl = this.container.querySelector('[data-id=action-save]');\n    this.loadGameEl = this.container.querySelector('[data-id=action-load]');\n    this.newGameEl.addEventListener('click', event => this.onNewGameClick(event));\n    this.saveGameEl.addEventListener('click', event => this.onSaveGameClick(event));\n    this.loadGameEl.addEventListener('click', event => this.onLoadGameClick(event));\n    this.boardEl = this.container.querySelector('[data-id=board]');\n    this.boardEl.classList.add(theme);\n    for (let i = 0; i < this.boardSize ** 2; i += 1) {\n      const cellEl = document.createElement('div');\n      cellEl.classList.add('cell', 'map-tile', `map-tile-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)}`);\n      cellEl.addEventListener('mouseenter', event => this.onCellEnter(event));\n      cellEl.addEventListener('mouseleave', event => this.onCellLeave(event));\n      cellEl.addEventListener('click', event => this.onCellClick(event));\n      this.boardEl.appendChild(cellEl);\n    }\n    this.cells = Array.from(this.boardEl.children);\n  }\n\n  /**\r\n   * Draws positions (with chars) on boardEl\r\n   *\r\n   * @param positions array of PositionedCharacter objects\r\n   */\n  redrawPositions(positions) {\n    for (const cell of this.cells) {\n      cell.innerHTML = '';\n    }\n    for (const position of positions) {\n      const cellEl = this.boardEl.children[position.position];\n      const charEl = document.createElement('div');\n      charEl.classList.add('character', position.character.type);\n      const healthEl = document.createElement('div');\n      healthEl.classList.add('health-level');\n      const healthIndicatorEl = document.createElement('div');\n      healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)}`);\n      healthIndicatorEl.style.width = `${position.character.health}%`;\n      healthEl.appendChild(healthIndicatorEl);\n      charEl.appendChild(healthEl);\n      cellEl.appendChild(charEl);\n    }\n  }\n\n  /**\r\n   * Add listener to mouse enter for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellEnterListener(callback) {\n    this.cellEnterListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to mouse leave for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellLeaveListener(callback) {\n    this.cellLeaveListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to mouse click for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellClickListener(callback) {\n    this.cellClickListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"New Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addNewGameListener(callback) {\n    this.newGameListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"Save Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addSaveGameListener(callback) {\n    this.saveGameListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"Load Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addLoadGameListener(callback) {\n    this.loadGameListeners.push(callback);\n  }\n  onCellEnter(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellEnterListeners.forEach(o => o.call(null, index));\n  }\n  onCellLeave(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellLeaveListeners.forEach(o => o.call(null, index));\n  }\n  onCellClick(event) {\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellClickListeners.forEach(o => o.call(null, index));\n  }\n  onNewGameClick(event) {\n    event.preventDefault();\n    this.newGameListeners.forEach(o => o.call(null));\n  }\n  onSaveGameClick(event) {\n    event.preventDefault();\n    this.saveGameListeners.forEach(o => o.call(null));\n  }\n  onLoadGameClick(event) {\n    event.preventDefault();\n    this.loadGameListeners.forEach(o => o.call(null));\n  }\n  static showError(message) {\n    alert(message);\n  }\n  static showMessage(message) {\n    alert(message);\n  }\n  selectCell(index, color = 'yellow') {\n    this.deselectCell(index);\n    this.cells[index].classList.add('selected', `selected-${color}`);\n  }\n  deselectCell(index) {\n    const cell = this.cells[index];\n    cell.classList.remove(...Array.from(cell.classList).filter(o => o.startsWith('selected')));\n  }\n  showCellTooltip(message, index) {\n    this.cells[index].title = message;\n  }\n  hideCellTooltip(index) {\n    this.cells[index].title = '';\n  }\n  showDamage(index, damage) {\n    return new Promise(resolve => {\n      const cell = this.cells[index];\n      const damageEl = document.createElement('span');\n      damageEl.textContent = damage;\n      damageEl.classList.add('damage');\n      cell.appendChild(damageEl);\n      damageEl.addEventListener('animationend', () => {\n        cell.removeChild(damageEl);\n        resolve();\n      });\n    });\n  }\n  setCursor(cursor) {\n    this.boardEl.style.cursor = cursor;\n  }\n  checkBinding() {\n    if (this.container === null) {\n      throw new Error('GamePlay not bind to DOM');\n    }\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameState.js":
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameState)\n/* harmony export */ });\nclass GameState {\n  constructor() {\n    this.currentTurn = 'player';\n    this.positionedCharacters = [];\n    this.character = null;\n    this.player = true;\n    this.level = 0;\n    this.endGame = false;\n    this.score = 0;\n    this.redDrawPositionsArr = [];\n  }\n  static from(object) {\n    const gameState = new GameState();\n    for (let key in object) {\n      gameState[key] = object[key];\n    }\n    return gameState;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameState.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\nclass GameStateService {\n  constructor(storage) {\n    this.storage = storage;\n  }\n  save(state) {\n    this.storage.setItem('state', JSON.stringify(state));\n  }\n  load() {\n    try {\n      return JSON.parse(this.storage.getItem('state'));\n    } catch (e) {\n      throw new Error('Invalid state');\n    }\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PositionedCharacter)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\nclass PositionedCharacter {\n  constructor(character, position) {\n    if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      throw new Error('character must be instance of Character or its children');\n    }\n    if (typeof position !== 'number') {\n      throw new Error('position must be a number');\n    }\n    this.character = character;\n    this.position = position;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Team)\n/* harmony export */ });\n/**\r\n * Класс, представляющий персонажей команды\r\n *\r\n * @todo Самостоятельно продумайте хранение персонажей в классе\r\n * Например\r\n * @example\r\n * ```js\r\n * const characters = [new Swordsman(2), new Bowman(1)]\r\n * const team = new Team(characters);\r\n *\r\n * team.characters // [swordsman, bowman]\r\n * ```\r\n * */\nclass Team {\n  // TODO: write your logic here\n  constructor(characters) {\n    this.characters = characters;\n  }\n  levelUp(arr) {\n    return arr.forEach(char => {\n      char.character.level = char.character.level + 1;\n      char.character.attack = Math.max(char.character.attack, char.character.attack * (80 + char.character.health) / 100);\n      char.character.defence = Math.max(char.character.defence, char.character.defence * (80 + char.character.health) / 100);\n      char.character.health = char.character.health + 80 > 100 ? 100 : char.character.health + 80;\n    });\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/Team.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\n\n\n\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\nconst stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nconst gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init();\n\n// don't write your code here\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/app.js?");

/***/ }),

/***/ "./src/js/characters/Bowman.js":
/*!*************************************!*\
  !*** ./src/js/characters/Bowman.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bowman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Bowman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 25;\n    this.defence = 25;\n    this.health = 50;\n    this.type = 'bowman';\n    this.moveDistance = 2;\n    this.attackDistance = 2;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Bowman.js?");

/***/ }),

/***/ "./src/js/characters/Daemon.js":
/*!*************************************!*\
  !*** ./src/js/characters/Daemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Daemon)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Daemon extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 10;\n    this.defence = 10;\n    this.health = 50;\n    this.type = 'daemon';\n    this.moveDistance = 1;\n    this.attackDistance = 4;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Daemon.js?");

/***/ }),

/***/ "./src/js/characters/Magician.js":
/*!***************************************!*\
  !*** ./src/js/characters/Magician.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Magician)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Magician extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 10;\n    this.defence = 40;\n    this.health = 50;\n    this.type = 'magician';\n    this.moveDistance = 1;\n    this.attackDistance = 4;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Magician.js?");

/***/ }),

/***/ "./src/js/characters/Swordsman.js":
/*!****************************************!*\
  !*** ./src/js/characters/Swordsman.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Swordsman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Swordsman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 40;\n    this.defence = 10;\n    this.health = 50;\n    this.type = 'swordsman';\n    this.moveDistance = 4;\n    this.attackDistance = 1;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Swordsman.js?");

/***/ }),

/***/ "./src/js/characters/Undead.js":
/*!*************************************!*\
  !*** ./src/js/characters/Undead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Undead)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Undead extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 40;\n    this.defence = 10;\n    this.health = 50;\n    this.type = 'undead';\n    this.moveDistance = 4;\n    this.attackDistance = 1;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Undead.js?");

/***/ }),

/***/ "./src/js/characters/Vampire.js":
/*!**************************************!*\
  !*** ./src/js/characters/Vampire.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vampire)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Vampire extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    super(level);\n    this.level = level;\n    this.attack = 10;\n    this.defence = 10;\n    this.health = 50;\n    this.type = 'vampire';\n    this.moveDistance = 2;\n    this.attackDistance = 2;\n  }\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Vampire.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cursors = {\n  auto: 'auto',\n  pointer: 'pointer',\n  crosshair: 'crosshair',\n  notallowed: 'not-allowed'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursors);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: () => (/* binding */ characterGenerator),\n/* harmony export */   generateTeam: () => (/* binding */ generateTeam)\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\n/**\r\n * Формирует экземпляр персонажа из массива allowedTypes со\r\n * случайным уровнем от 1 до maxLevel\r\n *\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @returns генератор, который при каждом вызове\r\n * возвращает новый экземпляр класса персонажа\r\n *\r\n */\n\nfunction* characterGenerator(allowedTypes, maxLevel) {\n  while (true) {\n    const randomType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];\n    const randomLevel = Math.ceil(Math.random() * maxLevel);\n    yield new randomType(randomLevel);\n  }\n}\n\n/**\r\n * Формирует массив персонажей на основе characterGenerator\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @param characterCount количество персонажей, которое нужно сформировать\r\n * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount\r\n * */\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  // TODO: write logic here\n  const playerGenerator = characterGenerator(allowedTypes, maxLevel);\n  const characters = [];\n  for (let i = 1; i <= characterCount; i++) {\n    characters.push(playerGenerator.next().value);\n  }\n  const team = new _Team__WEBPACK_IMPORTED_MODULE_0__[\"default\"](characters);\n  return team;\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/generators.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst themes = {\n  prairie: 'prairie',\n  desert: 'desert',\n  arctic: 'arctic',\n  mountain: 'mountain'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType),\n/* harmony export */   findClosestNumber: () => (/* binding */ findClosestNumber),\n/* harmony export */   getAllPositionsToMove: () => (/* binding */ getAllPositionsToMove)\n/* harmony export */ });\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\nfunction calcTileType(index, boardSize) {\n  if (index === 0) {\n    return 'top-left';\n  } else if (index === boardSize - 1) {\n    return 'top-right';\n  } else if (index > 0 && index < boardSize - 1) {\n    return 'top';\n  } else if (index === boardSize * boardSize - 1) {\n    return 'bottom-right';\n  } else if (index === boardSize * boardSize - boardSize) {\n    return 'bottom-left';\n  } else if (index > boardSize * boardSize - boardSize && index < boardSize * boardSize - 1) {\n    return 'bottom';\n  } else if (index !== 0 && index !== boardSize * boardSize - boardSize && index % boardSize === 0) {\n    return 'left';\n  } else if (index !== boardSize - 1 && index !== boardSize * boardSize - 1 && (index + 1) % boardSize === 0) {\n    return 'right';\n  }\n  // TODO: ваш код будет тут\n  return 'center';\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return 'critical';\n  }\n  if (health < 50) {\n    return 'normal';\n  }\n  return 'high';\n}\nfunction getAllPositionsToMove(gameStateType, positionedCharacters, type) {\n  if (!gameStateType || positionedCharacters === undefined || type === null) return;\n  const boardSize = 8;\n  const allPositionsToMove = [];\n  let moveDistance = 0;\n  let top = positionedCharacters;\n  let topLeft = positionedCharacters;\n  let topRight = positionedCharacters;\n  let left = positionedCharacters;\n  let right = positionedCharacters;\n  let bottomLeft = positionedCharacters;\n  let bottomRight = positionedCharacters;\n  let bottom = positionedCharacters;\n  if (type === 'move') {\n    moveDistance = gameStateType.moveDistance;\n  } else if (type === 'attack') {\n    moveDistance = gameStateType.attackDistance;\n  }\n  for (let i = 0; i < moveDistance; i++) {\n    //top\n    if (top >= boardSize) {\n      top -= boardSize;\n      allPositionsToMove.push(top);\n    }\n\n    //top-left\n    if (topLeft >= boardSize && topLeft % boardSize !== 0 && topLeft !== 8) {\n      topLeft -= boardSize + 1;\n      allPositionsToMove.push(topLeft);\n    }\n\n    //top-right\n    if (topRight >= boardSize && topRight % (topRight + 1) !== 0 && boardSize !== 0) {\n      topRight -= boardSize - 1;\n      allPositionsToMove.push(topRight);\n    }\n\n    //left\n    if (left % boardSize !== 0) {\n      left -= 1;\n      allPositionsToMove.push(left);\n    }\n\n    //right\n    if ((right + 1) % boardSize !== 0) {\n      right += 1;\n      allPositionsToMove.push(right);\n    }\n\n    //bottom-left\n    if (bottomLeft <= boardSize * boardSize - boardSize && bottomLeft % boardSize !== 0) {\n      bottomLeft += boardSize - 1;\n      allPositionsToMove.push(bottomLeft);\n    }\n\n    //bottom-right\n    if (bottomRight <= boardSize * boardSize - boardSize && (bottomRight + 1) % boardSize !== 0) {\n      bottomRight += boardSize + 1;\n      allPositionsToMove.push(bottomRight);\n    }\n\n    //bottom\n    if (bottom < boardSize * boardSize - boardSize && bottom < boardSize * boardSize - 1) {\n      bottom += boardSize;\n      allPositionsToMove.push(bottom);\n    }\n  }\n  return allPositionsToMove;\n}\nfunction findClosestNumber(arr, number, positions) {\n  if (arr.length === 0) return null;\n  const availablePositions = arr.filter(pos => !positions.includes(pos));\n  if (availablePositions.length === 0) return null;\n  const boardSize = 8;\n  const isPlayerOnLeft = number % boardSize < boardSize / 2;\n  const filteredPositions = availablePositions.filter(pos => {\n    const posCol = pos % boardSize;\n    return isPlayerOnLeft ? posCol < boardSize / 2 : posCol >= boardSize / 2;\n  });\n  const positionsToCheck = filteredPositions.length > 0 ? filteredPositions : availablePositions;\n  let closest = positionsToCheck[0];\n  let dif = Math.abs(number - closest);\n  positionsToCheck.forEach(el => {\n    const currentDif = Math.abs(number - el);\n    if (currentDif < dif) {\n      dif = currentDif;\n      closest = el;\n    }\n  });\n  return closest;\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;