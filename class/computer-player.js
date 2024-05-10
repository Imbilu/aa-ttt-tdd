
class ComputerPlayer {

  static getValidMoves(grid) {
    let moves = [];
    for(let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if(grid[i][j] === ' ') {
          moves.push({row: i, col: j});
        }
      }
    }
    return moves;
  }

  static randomMove(grid) {
    let availableMoves = this.getValidMoves(grid);

    // Select a random move from the available moves
    let randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }

  static getWinningMoves(grid, symbol) {
    let moves = [];
    // let gridCopy = grid;
    let validMoves = this.getValidMoves(grid);
    for(const move of validMoves) {
      grid[move.row][move.col] = symbol;
      if(this.checkWin(grid) === symbol) {
        moves.push(move);
      }
      grid[move.row][move.col] = ' ';
    }

    return moves;
  }

  static getSmartMove(grid, symbol) {
    let winMoves = this.getWinningMoves(grid, symbol);
    if (winMoves.length > 0) {
      return winMoves[0];
    }
    else {
      let blockMoves = this.getWinningMoves(grid, 'O');
      if(blockMoves.length > 0) {
        return blockMoves[0];
      }
    }
    return this.randomMove(grid);
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

}



module.exports = ComputerPlayer;
