const { Robot, Direction } = require("../src/robot.js");

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

describe("Test robot movement based on test cases", () => {
  test("test case 1: 7 3 N - RAALAL", () => {
    const robot = new Robot(7, 3, Direction.NORTH);
    robot.parseCommand("RAALAL");
    expect(robot.getPosition()).toEqual({ x: 9, y: 4, facing: Direction.WEST });
  });
  test("test case 2: 1 1 S - LA", () => {
    const robot = new Robot(1, 1, Direction.SOUTH);
    robot.parseCommand("LA");
    expect(robot.getPosition()).toEqual({ x: 2, y: 1, facing: Direction.EAST });
  });
  test("test case 3: 11 9 E - RARARA", () => {
    const robot = new Robot(11, 9, Direction.EAST);
    robot.parseCommand("RARARA");
    expect(robot.getPosition()).toEqual({
      x: 10,
      y: 9,
      facing: Direction.NORTH,
    });
  });
  test("test case 4: 8 0 N - A", () => {
    const robot = new Robot(8, 0, Direction.NORTH);
    robot.parseCommand("A");
    expect(robot.getPosition()).toEqual({
      x: 8,
      y: 1,
      facing: Direction.NORTH,
    });
  });
  test("test case 5: 8 0 J - RAA - should throw error Invalid position!", () => {
    expect(() => {
      const robot = new Robot(8, 0, "J");
      robot.parseCommand("RAA");
    }).toThrow("Invalid position!");
  });
  test("test case 6: 8 0 N - ABC - should throw error Invalid movement!", () => {
    expect(() => {
      const robot = new Robot(8, 0, "N");
      robot.parseCommand("ABC");
    }).toThrow("Invalid movement!");
  });
});
