// Mock readline
const readline = require("readline");
const RobotCLI = require("../src/infrastructure/cli/RobotCLI.js");
jest.mock("readline");

describe("Test Robot Simulator CLI", () => {
  let mockQuestion;
  let mockClose;
  let consoleSpy;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock console.log
    consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Mock readline interface
    mockQuestion = jest.fn();
    mockClose = jest.fn();

    readline.createInterface.mockReturnValue({
      question: mockQuestion,
      close: mockClose,
    });
  });

  test("first", () => {
    expect(1).toBe(1);
  });

  test("handles valid initial position and commands", () => {
    // Mock user inputs
    mockQuestion
      .mockImplementationOnce((question, cb) => cb("0 0 N")) // Initial position
      .mockImplementationOnce((question, cb) => cb("RAR")) // Commands
      .mockImplementationOnce((question, cb) => cb("n")); // Don't continue

    // Run the CLI
    const RobotCLI = require("../src/infrastructure/cli/RobotCLI.js");

    const cli = new RobotCLI();
    cli.start();

    // Check if correct questions were asked
    expect(mockQuestion).toHaveBeenCalledTimes(3);
    expect(mockQuestion.mock.calls[0][0]).toContain("Enter initial position");
    expect(mockQuestion.mock.calls[1][0]).toContain("Enter movement commands");
    expect(mockQuestion.mock.calls[2][0]).toContain(
      "Would you like to move the robot again?"
    );

    // Check if correct output was displayed
    expect(consoleSpy).toHaveBeenCalledWith("Welcome to Robot Control!\n");
    expect(consoleSpy).toHaveBeenCalledWith("\nInitial position:", {
      x: 0,
      y: 0,
      facing: "N",
    });
    expect(consoleSpy).toHaveBeenCalledWith("\nFinal position:", {
      x: 1,
      y: 0,
      facing: "S",
    });
    expect(consoleSpy).toHaveBeenCalledWith("\nGoodbye!");
  });
});
