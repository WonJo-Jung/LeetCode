/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxSize = 0, R = matrix.length, C = matrix[0].length;
  let dp = [];
  for(let i=0; i<R+1; i++) dp[i] = new Array(C+1).fill(0);
  for(let i=1; i<=R; i++) {
    for(let j=1; j<=C; j++) {
      if(matrix[i-1][j-1] === '1') {
        dp[i][j] = Math.min(Math.min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]) + 1;
        maxSize = Math.max(maxSize, dp[i][j]);
      }
    }
  }
  return maxSize * maxSize;
  /* Brute Force
  // for(let r=0; r<R; r++) {
  //   for(let c=0; c<C; c++) {
  //     if(matrix[r][c] === '1') {
  //       let square = 1;
  //       outer : for( ; r+square<R && c+square<C; square++) {
  //         if(matrix[r+square][c+square] === '0') break;
  //         for(let up=r+square-1; up>=r; up--) { // move up from diagonal position
  //           if(matrix[up][c+square] === '0') break outer;
  //         }
  //         for(let left=c+square-1; left>=c; left--) { // move left from dianogal position
  //           if(matrix[r+square][left] === '0') break outer;
  //         }
  //       }
  //       maxSize = Math.max(maxSize, square * square);
  //     }
  //   }
  // }
  // return maxSize;
  */
};