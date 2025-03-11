const readline = require("readline");
const { Robot, Direction } = require("./robot.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Robot Control!\n");

function askPosition() {
  rl.question(
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
        askPosition();
        return;
      }

      const robot = new Robot(parseInt(x), parseInt(y), facing.toUpperCase());
      console.log("\nInitial position:", robot.getPosition());

      askCommands(robot);
    }
  );
}

function askCommands(robot) {
  rl.question(
    "\nEnter movement commands (R = right, L = left, A = advance) [e.g., RARA]: ",
    (commands) => {
      const validCommands = commands
        .toUpperCase()
        .split("")
        .every((cmd) => ["R", "L", "A"].includes(cmd));

      if (!validCommands) {
        console.log("Invalid commands! Please use only R, L, and A");
        askCommands(robot);
        return;
      }

      for (const command of commands.toUpperCase()) {
        switch (command) {
          case "R":
            robot.turnRight();
            break;
          case "L":
            robot.turnLeft();
            break;
          case "A":
            robot.moveForward();
            break;
        }
      }

      console.log("\nFinal position:", robot.getPosition());

      rl.question(
        "\nWould you like to move the robot again? (y/n): ",
        (answer) => {
          if (answer.toLowerCase() === "y") {
            askPosition();
          } else {
            console.log("\nGoodbye!");
            rl.close();
          }
        }
      );
    }
  );
}

// Start the program by asking initial position
askPosition();
