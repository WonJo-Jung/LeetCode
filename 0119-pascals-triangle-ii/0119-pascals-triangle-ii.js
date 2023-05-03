/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let answer = [1];
  for(let i=1; i<=rowIndex; i++) {
    answer = answer.map((v,i) => v+answer[i+1]);
    answer.unshift(1);
    answer[answer.length-1] = 1;
  }
  return answer;
};