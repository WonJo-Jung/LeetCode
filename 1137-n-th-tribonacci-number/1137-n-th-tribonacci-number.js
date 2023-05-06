/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let left = 0, medium = 1, right = 1;
  if(n==0) return left;
  else if(n==1) return medium;
  else if(n==2) return right;
  
  while(n) {
    if(n-- == 2) return right;
    let curr = left + medium + right;
    left = medium;
    medium = right;
    right = curr;
  }
};