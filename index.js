function main(initialX, initialY, facing) {
  let x = initialX;
  let y = initialY;
  
  coordinate = moveRobot([x, y], facing, 2);
}

/**
 * Turns the robot based on its current facing direction and the turn direction.
 * @param {string} facing - The current facing direction of the robot ('N', 'S', 'E', or 'W').
 * @param {string} direction - The direction to turn ('L' for left or 'R' for right).
 * @returns {string} The new facing direction after the turn.
 */
function turnRobot(facing, direction) {
  switch (facing) {
    case "N":
      if (direction === "L") return "W";
      if (direction === "R") return "E";
      break;
    case "S":
      if (direction === "L") return "E";
      if (direction === "R") return "W";
      break;
    case "E":
      if (direction === "L") return "N";
      if (direction === "R") return "S";
      break;
    case "W":
      if (direction === "L") return "S";
      if (direction === "R") return "N";
      break;
    default:
      return facing;
  }
}

/**
 * 
 * @param {*} coordinate - The initial coordinate
 * @returns {void} print out the initial coordinate in console
 */
function printInitialPosition(coordinate) {
  const [x, y] = coordinate;
  console.log(`Initial position: [${x}, ${y}]`);
}

function moveRobot(coordinate, direction, step) {
  const [x, y] = coordinate;
  
  switch (direction) {
    case "E": // Right
      return [x + step, y, direction];
    case "W": // Left
      return [x - step, y, direction];
    case "N": // Up
      return [x, y + step, direction];
    case "S": // Down
      return [x, y - step, direction];
    default:
      return [...coordinate, direction];
  }
}

function moveForward(coordinate, facing, step) {
  switch (facing) {
    case "N":
      return moveRobot(coordinate, facing, step);
    case "S":
      return moveRobot(coordinate, facing, step);
    case "E":
      return moveRobot(coordinate, facing, step);
    case "W":
      return moveRobot(coordinate, facing, step);
    default:
      return coordinate;
  }
}

main(7, 3, "N");

module.exports = { turnRobot, moveRobot, printInitialPosition, moveForward };
