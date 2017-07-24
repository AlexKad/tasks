// ###Sudoku Background Sudoku is a game played on a 9x9 grid.
//The goal of the game is to fill all cells of the grid with digits from 1 to 9,
//so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks)
// contain all of the digits from 1 to 9.

// ###Sudoku Solution Validator Write a function validSolution
//that accepts a 2D array representing a Sudoku board,
//and returns true if it is a valid solution, or false otherwise.
//The cells of the sudoku board may also contain 0's,
// which will represent empty cells.
// Boards containing one or more zeroes are considered to be invalid solutions.

function equals45(n){
  return n == 45;
}

function hasEquals(arr, el){
 if(arr.indexOf(el) == -1) return false;
 return true
}

function validSolution(board){
  var sum_square = [[0,0,0],[0,0,0],[0,0,0]],
      h=[], v=[];

  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
    	if( board[i][j] <=0 || board[i][j] > 9) return false;
      if(!h[i]) h[i] = [];
      if(!v[j]) v[j] = [];
      if(!hasEquals(h[i], board[i][j]) && !hasEquals(v[j], board[i][j])){
      	h[i].push(board[i][j]);
        v[j].push(board[i][j]);
      }
      else{
      	return false;
      }
      sum_square[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!sum_square[i].every(equals45)) return false;
  return true;
}
