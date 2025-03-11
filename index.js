const { Robot } = require("./src/robot.js");

const robot = new Robot(0, 0, "N");
robot.parseCommand("RAR");
robot.printPosition();
