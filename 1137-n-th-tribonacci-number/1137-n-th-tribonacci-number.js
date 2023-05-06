/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n <= 2) {
    if(n <= 1) {
      if(n <= 0) {
        return 0;
      } else return 1;
    } else return 1;
  } else {
    let left = 0, medium = 1, right = 1;
    while(n-- > 2) {
      let curr = left + medium + right;
      left = medium;
      medium = right;
      right = curr;
    }
    return right;
  }
};