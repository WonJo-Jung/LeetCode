/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let answer = [1];
  for(let i=1; i<=rowIndex; i++) {
    answer.push(0);
    let prev = [answer[0]];
    for(let j=1; j<answer.length; j++) {
      prev.push(answer[j]);
      answer[j] += prev.shift();
    }
  }
  return answer;
};