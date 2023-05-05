/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n===0) return 0;
  if(n===1) return 1;
  let prev = [0,1];
  while(prev.length <= n) {
    prev[prev.length] = prev[prev.length-2] + prev[prev.length-1];
  }
  return prev[n];
};