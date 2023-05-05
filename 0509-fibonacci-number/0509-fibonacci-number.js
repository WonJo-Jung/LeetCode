/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n===0) return 0;
  if(n===1) return 1;
  let prev = [0,1], num = 2;
  while(num++ < n) {
    if(num%2==1) prev[0] += prev[1];
    else prev[1] += prev[0];
  }
  return prev[0] + prev[1];
};