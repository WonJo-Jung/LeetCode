/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n===0) return 0;
  if(n===1) return 1;
  let prev1 = 0, prev2 = 1, num = 2;
  while(num++ < n) {
    if(num%2==1) prev1 += prev2;
    else prev2 += prev1;
  }
  return prev1 + prev2;
};