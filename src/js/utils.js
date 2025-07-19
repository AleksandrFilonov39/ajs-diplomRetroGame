/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  if(index === 0) {
    return 'top-left'
  } else if (index === boardSize - 1) {
    return 'top-right'
  } else if(index > 0 && index < boardSize - 1) {
    return 'top'
  } else if (index === (boardSize*boardSize) - 1) {
    return 'bottom-right'
  } else if (index === (boardSize*boardSize) - boardSize) {
    return 'bottom-left'
  } else if(index > (boardSize*boardSize) - boardSize && index < (boardSize*boardSize) - 1) {
    return 'bottom'
  } else if(index !== 0 && index !== (boardSize*boardSize) - boardSize && index % boardSize === 0) {
    return 'left'
  } else if(index !== boardSize - 1 && index !== (boardSize*boardSize) - 1 && (index + 1) % (boardSize) === 0) {
    return 'right'
  }
  // TODO: ваш код будет тут
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function getAllPositionsToMove(gameStateType, positionedCharacters, type) {
  
  if (!gameStateType || positionedCharacters === undefined || type === null) return [];

  const boardSize = 8;
  const allPositionsToMove = [];
  let moveDistance = 0; 
  let top = positionedCharacters;
  let topLeft = positionedCharacters;
  let topRight = positionedCharacters;
  let left = positionedCharacters;
  let right = positionedCharacters;
  let bottomLeft = positionedCharacters;
  let bottomRight = positionedCharacters;
  let bottom = positionedCharacters;

  if(type === 'move') {
    moveDistance = gameStateType?.moveDistance
  } else if (type === 'attack') {
    moveDistance = gameStateType?.attackDistance
  }

  for (let i = 0; i < moveDistance; i++) {
    //top
    if (top >= boardSize) {
      top -= boardSize
      allPositionsToMove.push(top)
    }

    //top-left
    if (topLeft >= boardSize && topLeft % boardSize !== 0 && topLeft !== 8) {
      topLeft -= (boardSize + 1)
      allPositionsToMove.push(topLeft)
    }

    //top-right
    if (topRight >= boardSize && topRight % (topRight + 1) !== 0 && (boardSize) !== 0) {
      topRight -= (boardSize - 1)
      allPositionsToMove.push(topRight)
    }

    //left
    if (left % boardSize !== 0) {
      left -= 1
      allPositionsToMove.push(left)
    }

    //right
    if ((right + 1) % (boardSize) !== 0) {
      right += 1
      allPositionsToMove.push(right)
    }

    //bottom-left
    if (bottomLeft <= (boardSize*boardSize) - boardSize && bottomLeft % boardSize !== 0) {
      bottomLeft += boardSize - 1
      allPositionsToMove.push(bottomLeft)
    }

    //bottom-right
     if (bottomRight <= (boardSize*boardSize) - boardSize && (bottomRight + 1) % boardSize !== 0) {
      bottomRight += boardSize + 1
      allPositionsToMove.push(bottomRight)
    }

    //bottom
    if (bottom < (boardSize*boardSize) - boardSize && bottom < (boardSize*boardSize) - 1) {
      bottom += boardSize
      allPositionsToMove.push(bottom)
    }
  }
 
  return allPositionsToMove;
}



