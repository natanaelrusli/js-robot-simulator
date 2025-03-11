const Direction = {
  NORTH: "N",
  SOUTH: "S",
  EAST: "E",
  WEST: "W",
};

// Value Objects
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveNorth() {
    return new Position(this.x, this.y + 1);
  }

  moveSouth() {
    return new Position(this.x, this.y - 1);
  }

  moveEast() {
    return new Position(this.x + 1, this.y);
  }

  moveWest() {
    return new Position(this.x - 1, this.y);
  }
}

// Domain Entity
class Robot {
  constructor(position, facing) {
    if (!Object.values(Direction).includes(facing)) {
      throw new Error("Invalid position!");
    }
    this.position = position;
    this.facing = facing;
  }

  getPosition() {
    return {
      x: this.position.x,
      y: this.position.y,
      facing: this.facing,
    };
  }

  moveForward() {
    switch (this.facing) {
      case Direction.NORTH:
        this.position = this.position.moveNorth();
        break;
      case Direction.SOUTH:
        this.position = this.position.moveSouth();
        break;
      case Direction.EAST:
        this.position = this.position.moveEast();
        break;
      case Direction.WEST:
        this.position = this.position.moveWest();
        break;
    }
  }

  turnRight() {
    const RIGHT_TURNS = {
      [Direction.NORTH]: Direction.EAST,
      [Direction.SOUTH]: Direction.WEST,
      [Direction.EAST]: Direction.SOUTH,
      [Direction.WEST]: Direction.NORTH,
    };
    this.facing = RIGHT_TURNS[this.facing];
  }

  turnLeft() {
    const LEFT_TURNS = {
      [Direction.NORTH]: Direction.WEST,
      [Direction.SOUTH]: Direction.EAST,
      [Direction.EAST]: Direction.NORTH,
      [Direction.WEST]: Direction.SOUTH,
    };
    this.facing = LEFT_TURNS[this.facing];
  }
}

module.exports = { Robot, Position, Direction };
