/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let answer = [0,1,1,2], num_of_digits = 2;
  while(Math.pow(2, num_of_digits++) - 1 < n) {
    let next = JSON.parse(JSON.stringify(answer)).map(v => v+1);
    answer = answer.concat(next);
  }
  return answer.slice(0, n+1);
};