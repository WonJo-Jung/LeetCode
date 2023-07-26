/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1, right = num, mid;
  while(left <= right) {
    mid = Math.floor((left+right)/2);
    if(mid*mid === num) return true;
    else if(mid*mid < num) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};