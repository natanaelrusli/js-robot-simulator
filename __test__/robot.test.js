const { Robot } = require("../src/robot.js");

describe("Robot instance", () => {
  test("creates a new Robot instance", () => {
    const robot = new Robot(0, 0, "N");
    expect(robot).toBeInstanceOf(Robot);
  });
  test("gets the current position and facing direction of the robot", () => {
    const robot = new Robot(0, 0, "N");
    expect(robot.getPosition()).toEqual({ x: 0, y: 0, facing: "N" });
  });
  test("moves the robot forward one step in the current facing direction", () => {
    const robot = new Robot(0, 0, "N");
    robot.moveForward();
    expect(robot.getPosition()).toEqual({ x: 0, y: 1, facing: "N" });
  });
  test("test command input RAR", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("RAR");
    expect(robot.getPosition()).toEqual({ x: 1, y: 0, facing: "S" });
  });
  test("test command input RARAR", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("RARAR");
    expect(robot.getPosition()).toEqual({ x: 1, y: -1, facing: "W" });
  });
  test("test command input RARARAR", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("RARARAR");
    expect(robot.getPosition()).toEqual({ x: 0, y: -1, facing: "N" });
  });
  test("test command input LAL", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("LAL");
    expect(robot.getPosition()).toEqual({ x: -1, y: 0, facing: "S" });
  });
  test("test command input LALA", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("LALA");
    expect(robot.getPosition()).toEqual({ x: -1, y: -1, facing: "S" });
  });
  test("test printPosition", () => {
    const robot = new Robot(0, 0, "N");
    robot.parseCommand("LALA");
    expect(robot.printPosition()).toBeUndefined();
  });
});
