const {
  Robot,
  Position,
  Direction,
} = require("../../../src/domain/robot/Robot");
const RobotCommandService = require("../../../src/application/services/RobotCommandService");

describe("Robot Domain", () => {
  test("creates a new Robot instance", () => {
    const position = new Position(0, 0);
    const robot = new Robot(position, "N");
    expect(robot).toBeInstanceOf(Robot);
  });

  test("gets the current position and facing direction of the robot", () => {
    const position = new Position(0, 0);
    const robot = new Robot(position, "N");
    expect(robot.getPosition()).toEqual({ x: 0, y: 0, facing: "N" });
  });

  test("moves the robot forward one step in the current facing direction", () => {
    const position = new Position(0, 0);
    const robot = new Robot(position, "N");
    robot.moveForward();
    expect(robot.getPosition()).toEqual({ x: 0, y: 1, facing: "N" });
  });
});

describe("RobotCommandService", () => {
  test("executes command RAR correctly", () => {
    const position = new Position(0, 0);
    const robot = new Robot(position, "N");
    const service = new RobotCommandService(robot);

    expect(service.executeCommand("RAR")).toEqual({ x: 1, y: 0, facing: "S" });
  });

  test("throws error on invalid command", () => {
    const position = new Position(0, 0);
    const robot = new Robot(position, "N");
    const service = new RobotCommandService(robot);

    expect(() => service.executeCommand("ABC")).toThrow("Invalid movement!");
  });
});

describe("Test robot movement based on test cases", () => {
  test("test case 1: 7 3 N - RAALAL", () => {
    const position = new Position(7, 3);
    const robot = new Robot(position, Direction.NORTH);
    const service = new RobotCommandService(robot);

    expect(service.executeCommand("RAALAL")).toEqual({
      x: 9,
      y: 4,
      facing: Direction.WEST,
    });
  });
  test("test case 2: 1 1 S - LA should return 2 1 E", () => {
    const position = new Position(1, 1);
    const robot = new Robot(position, Direction.SOUTH);
    const service = new RobotCommandService(robot);

    expect(service.executeCommand("LA")).toEqual({
      x: 2,
      y: 1,
      facing: Direction.EAST,
    });
  });
  test("test case 3: 11 9 E - RARARA should return 10 9 N", () => {
    const position = new Position(11, 9);
    const robot = new Robot(position, Direction.EAST);
    const service = new RobotCommandService(robot);

    expect(service.executeCommand("RARARA")).toEqual({
      x: 10,
      y: 9,
      facing: Direction.NORTH,
    });
  });
  test("test case 4: 8 0 N - A should return 8 1 N", () => {
    const position = new Position(8, 0);
    const robot = new Robot(position, Direction.NORTH);
    const service = new RobotCommandService(robot);

    expect(service.executeCommand("A")).toEqual({
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
    const position = new Position(8, 0);
    const robot = new Robot(position, Direction.NORTH);
    const service = new RobotCommandService(robot);

    expect(() => service.executeCommand("ABC")).toThrow("Invalid movement!");
  });
});
