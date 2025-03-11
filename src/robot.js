class Robot {
  /**
   * Creates a new Robot instance
   * @param {number} x - Initial x coordinate
   * @param {number} y - Initial y coordinate
   * @param {string} facing - Initial facing direction ('N', 'S', 'E', or 'W')
   */
  constructor(x, y, facing) {
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
      case "N":
        this.y++;
        break;
      case "S":
        this.y--;
        break;
      case "E":
        this.x++;
        break;
      case "W":
        this.x--;
        break;
    }
  }

  /**
   * Turns the robot to the right by changing the facing property of the robot
   * @returns {void}
   */
  turnRight() {
    switch (this.facing) {
      case "N":
        this.facing = "E";
        break;
      case "S":
        this.facing = "W";
        break;
      case "E":
        this.facing = "S";
        break;
      case "W":
        this.facing = "N";
        break;
    }
  }

  /**
   * Turns the robot to the left by changing the facing property of the robot
   * @returns {void}
   */
  turnLeft() {
    switch (this.facing) {
      case "N":
        this.facing = "W";
        break;
      case "S":
        this.facing = "E";
        break;
      case "E":
        this.facing = "N";
        break;
      case "W":
        this.facing = "S";
        break;
    }
  }

  /**
   * parse input from command line
   * ex: RARA will make the robot turn right and then move forward then turn right again and move forward
   */
  parseCommand(command) {
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

module.exports = { Robot };
