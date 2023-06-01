/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxSize = 0, R = matrix.length, C = matrix[0].length;
  for(let r=0; r<R; r++) {
    for(let c=0; c<C; c++) {
      if(matrix[r][c] === '1') {
        let square = 1;
        outer : for( ; r+square<R && c+square<C; square++) {
          if(matrix[r+square][c+square] === '0') break;
          for(let up=r+square-1; up>=r; up--) { // move up from diagonal position
            if(matrix[up][c+square] === '0') break outer;
          }
          for(let left=c+square-1; left>=c; left--) { // move left from dianogal position
            if(matrix[r+square][left] === '0') break outer;
          }
        }
        maxSize = Math.max(maxSize, square * square);
      }
    }
  }
  return maxSize;
};