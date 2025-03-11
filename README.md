# js-robot-simulator

A robot simulator implemented in JavaScript following Domain-Driven Design (DDD) principles.

## Project Structure

The project follows a DDD-based architecture with clear separation of concerns:

```
src/
├── domain/           # Core business logic and rules
│   └── robot/
│       ├── Robot.js         # Domain entity and value objects
│       └── RobotRepository.js # Repository interface
├── application/     # Application services and use cases
│   └── services/
│       └── RobotCommandService.js
└── infrastructure/ # External concerns and implementations
    └── cli/
        └── RobotCLI.js

```

### Domain-Driven Design Implementation

#### Domain Layer (`src/domain/`)
Contains the core business logic and rules of the application.

- **Entities**
  - `Robot`: Main domain entity representing a robot with position and direction
  - Properties: position (x, y), facing direction (N, S, E, W)
  - Behaviors: move forward, turn left, turn right

- **Value Objects**
  - `Position`: Immutable object representing coordinates (x, y)
  - `Direction`: Enumeration of possible directions (N, S, E, W)

- **Repository Interfaces**
  - `RobotRepository`: Interface for robot persistence operations

#### Application Layer (`src/application/`)
Orchestrates the flow of data and coordinates domain objects.

- **Services**
  - `RobotCommandService`: Handles command interpretation and execution
  - Validates commands
  - Coordinates robot movements
  - Returns position updates

#### Infrastructure Layer (`src/infrastructure/`)
Handles external concerns and implementations.

- **CLI**
  - `RobotCLI`: Command-line interface for robot control
  - Handles user input/output
  - Coordinates with application services

### How It Works

1. **Command Processing Flow**
   ```
   User Input → CLI → Command Service → Robot Entity → Position Update
   ```

2. **Domain Rules**
   - Robot can only face N, S, E, or W
   - Commands are limited to R (right), L (left), A (advance)
   - Position is tracked using x,y coordinates

3. **Command Examples**
   - Input: `7 3 N RAALAL`
   - Output: `9 4 W`

## How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the program:
   ```bash
   npm start
   ```

### How to Run Unit Tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```
3. Run with coverage:
   ```bash
   npm run test:coverage
   ```

## Technical Details

- **Node Version**: 19
- **Testing Framework**: Jest
- **Architecture**: Domain-Driven Design
- **Pattern**: Command Pattern for robot operations

## Project Benefits

1. **Clean Architecture**
   - Clear separation of concerns
   - Easy to maintain and extend
   - Domain logic isolation

2. **Testability**
   - Each layer can be tested independently
   - Domain rules are easily verifiable
   - Mocking is straightforward

3. **Extensibility**
   - New commands can be added easily
   - Different interfaces can be implemented
   - Storage can be added without changing domain logic

## Future Improvements

1. Persistence layer implementation
2. Additional robot commands
3. Grid boundaries and obstacle detection
4. Multiple robot support
5. Web interface implementation
