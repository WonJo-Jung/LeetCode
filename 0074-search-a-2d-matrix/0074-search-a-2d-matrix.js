/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let row = 0;
  while(row < m) {
    if(target <= matrix[row][n-1]) {
      let left = 0, right = n - 1, mid;
      while(left <= right) {
        mid = Math.floor((left+right)/2);
        if(matrix[row][mid] === target) return true;
        else if(matrix[row][mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return false;
    }
    row++;
  }
  return false;
};