const Direction = {
  NORTH: "N",
  SOUTH: "S",
  EAST: "E",
  WEST: "W",
};

// Direction mapping for turning right
const RIGHT_TURNS = {
  [Direction.NORTH]: Direction.EAST,
  [Direction.SOUTH]: Direction.WEST,
  [Direction.EAST]: Direction.SOUTH,
  [Direction.WEST]: Direction.NORTH,
};

// Direction mapping for turning left
const LEFT_TURNS = {
  [Direction.NORTH]: Direction.WEST,
  [Direction.SOUTH]: Direction.EAST,
  [Direction.EAST]: Direction.NORTH,
  [Direction.WEST]: Direction.SOUTH,
};

class Robot {
  /**
   * Creates a new Robot instance
   * @param {number} x - Initial x coordinate
   * @param {number} y - Initial y coordinate
   * @param {Direction} facing - Initial facing direction ('N', 'S', 'E', or 'W')
   */
  constructor(x, y, facing) {
    if (!Object.values(Direction).includes(facing)) {
      throw new Error("Invalid position!");
    }
    this.x = x;
    this.y = y;
    this.facing = facing;
  }

  /**
   * Gets the current position and facing direction of the robot
   * @returns {Object} Object containing x, y coordinates and facing direction
   */
  getPosition() {
    return {
      x: this.x,
      y: this.y,
      facing: this.facing,
    };
  }

  /**
   * Moves the robot forward one step in the current facing direction
   */
  moveForward() {
    switch (this.facing) {
      case Direction.NORTH:
        this.y++;
        break;
      case Direction.SOUTH:
        this.y--;
        break;
      case Direction.EAST:
        this.x++;
        break;
      case Direction.WEST:
        this.x--;
        break;
    }
  }

  /**
   * Turns the robot to the right by changing the facing property of the robot
   * @returns {void}
   */
  turnRight() {
    this.facing = RIGHT_TURNS[this.facing];
  }

  /**
   * Turns the robot to the left by changing the facing property of the robot
   * @returns {void}
   */
  turnLeft() {
    this.facing = LEFT_TURNS[this.facing];
  }

  /**
   * parse input from command line
   * ex: RARA will make the robot turn right and then move forward then turn right again and move forward
   */
  parseCommand(command) {
    if (!command.match(/^[RLA]+$/)) {
      throw new Error("Invalid movement!");
    }
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if (char === "R") {
        this.turnRight();
      } else if (char === "L") {
        this.turnLeft();
      } else if (char === "A") {
        this.moveForward();
      }
    }
  }

  /**
   * Returns a string representation of the robot's current position and facing direction
   * @returns {string} String representation of the robot's current position and facing direction
   */
  printPosition() {
    console.log(`[${this.x}, ${this.y}, ${this.facing}]`);
  }
}

module.exports = { Robot, Direction };
