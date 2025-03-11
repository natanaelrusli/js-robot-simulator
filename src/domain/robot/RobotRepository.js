// Interface for future persistence implementations
class RobotRepository {
  save(robot) {
    throw new Error("Method not implemented");
  }

  findById(id) {
    throw new Error("Method not implemented");
  }
}

module.exports = RobotRepository;
