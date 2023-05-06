/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let left = 0, medium = 1, right = 1;
  if(n <= 2) {
    if(n <= 1) {
      if(n <= 0) {
        return left;
      } else return medium;
    } else return right;
  }
  while(n-- > 2) {
    let curr = left + medium + right;
    left = medium;
    medium = right;
    right = curr;
  }
  return right;
};