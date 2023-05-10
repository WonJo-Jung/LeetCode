/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let array = new Array(n).fill(1);
  for(let i=1; i<m; i++) {
    for(let j=1; j<n; j++) {
      array[j] += array[j-1];
    }
  }
  return array[n-1];
};