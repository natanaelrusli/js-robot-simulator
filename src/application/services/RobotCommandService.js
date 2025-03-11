class RobotCommandService {
  constructor(robot) {
    this.robot = robot;
  }

  executeCommand(command) {
    if (!command.match(/^[RLA]+$/)) {
      throw new Error("Invalid movement!");
    }

    for (const char of command) {
      switch (char) {
        case "R":
          this.robot.turnRight();
          break;
        case "L":
          this.robot.turnLeft();
          break;
        case "A":
          this.robot.moveForward();
          break;
      }
    }

    return this.robot.getPosition();
  }
}

module.exports = RobotCommandService;
