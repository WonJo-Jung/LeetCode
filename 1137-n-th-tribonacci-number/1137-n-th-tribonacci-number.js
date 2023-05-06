/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n <= 0) return 0;
  else if(n <= 2) return 1;
  else {
    let left = 0, medium = 1, right = 1, curr;
    while(n-- > 2) {
      curr = left + medium + right;
      left = medium;
      medium = right;
      right = curr;
    }
    return right;
  }
};