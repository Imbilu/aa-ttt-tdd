
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

    // Your code here
  }

  static getWinningMoves(grid, symbol) {

    // Your code here

  }

  static getSmartMove(grid, symbol) {

    // Your code here

  }

}

module.exports = ComputerPlayer;
