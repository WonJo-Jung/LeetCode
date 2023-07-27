/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1, right = n, mid;
  while(left <= right) {
    mid = Math.floor((left+right)/2);
    let guessed = guess(mid);
    if(guessed === 0) return mid;
    else if(guessed === 1) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};