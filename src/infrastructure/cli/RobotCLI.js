const readline = require("readline");
const { Robot, Position, Direction } = require("../../domain/robot/Robot");
const RobotCommandService = require("../../application/services/RobotCommandService");

class RobotCLI {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    console.log("Welcome to Robot Control!\n");
    this.askPosition();
  }

  askPosition() {
    this.rl.question(
      "Enter initial position (x y facing) [e.g., 7 3 N]: ",
      (answer) => {
        const [x, y, facing] = answer.trim().split(" ");
        const validDirections = Object.values(Direction);

        if (
          !x ||
          !y ||
          !facing ||
          isNaN(x) ||
          isNaN(y) ||
          !validDirections.includes(facing.toUpperCase())
        ) {
          console.log(
            "Invalid input! Please use format: x y facing (e.g., 7 3 N)"
          );
          this.askPosition();
          return;
        }

        const position = new Position(parseInt(x), parseInt(y));
        const robot = new Robot(position, facing.toUpperCase());
        const commandService = new RobotCommandService(robot);

        console.log("\nInitial position:", robot.getPosition());
        this.askCommands(commandService);
      }
    );
  }

  askCommands(commandService) {
    this.rl.question(
      "\nEnter movement commands (R = right, L = left, A = advance) [e.g., RARA]: ",
      (commands) => {
        try {
          const finalPosition = commandService.executeCommand(
            commands.toUpperCase()
          );
          console.log("\nFinal position:", finalPosition);

          this.rl.question(
            "\nWould you like to move the robot again? (y/n): ",
            (answer) => {
              if (answer.toLowerCase() === "y") {
                this.askPosition();
              } else {
                console.log("\nGoodbye!");
                this.rl.close();
              }
            }
          );
        } catch (error) {
          console.log(error.message);
          this.askCommands(commandService);
        }
      }
    );
  }
}

module.exports = RobotCLI;
