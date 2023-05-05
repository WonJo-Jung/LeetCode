/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let answer = [0,1,1,2], base = 3, increment = 2;
  while(base < n) {
    let next = JSON.parse(JSON.stringify(answer)).map(v => v+1);
    answer = answer.concat(next);
    base += increment *= 2;
  }
  return answer.slice(0, n+1);
};