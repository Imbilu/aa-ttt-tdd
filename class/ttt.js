const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('up', 'Up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('left', 'Left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'Right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('down', 'Down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('return', 'Place move', this.placeMove.bind(this));

    Screen.render();
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }


  placeMove() {
    const row = this.cursor.row;
    const col = this.cursor.col;

    // Check if the selected cell is empty
    if (this.grid[row][col] === ' ') {
      // Place the current player's mark
      this.grid[row][col] = this.playerTurn;
      Screen.setGrid(row, col, this.playerTurn);

      // Switch turns
      this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';

      // Check for win or tie after placing the move
      const winner = TTT.checkWin(this.grid);
      if (winner) {
        this.endGame(winner);
      }
    } else {
      // Display a message if the cell is occupied
      Screen.setMessage("This cell is already occupied. Try again!");
      Screen.render();
    }
  }

  static checkWin(grid) {

    for (let i = 0; i < grid.length; i++) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] != ' ') {
        return grid[i][0];
      }
      if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] != ' ') {
        return grid[0][i];
      }
    }
    if ((grid[0][0] === grid[1][1]) && (grid[1][1] === grid[2][2]) && grid[0][0] !== ' ') {
      return grid[0][0];
    }
    if ((grid[0][2] === grid[1][1]) && (grid[1][1] === grid[2][0]) && grid[0][2] !== ' ') {
      return grid[0][2];
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === ' ') {
          return false;
        }
      }
    }
    return 'T';

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
