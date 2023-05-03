/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let answer = [];
  answer.push([1]);
  if(numRows == 1) return answer;
  answer.push([1,1]);
  if(numRows == 2) return answer;
  for(let i=2; i<numRows; i++) {
    let calculation = [];
    for(let j=0; j<answer[i-1].length-1; j++) {
      calculation.push(answer[i-1][j] + answer[i-1][j+1]);
    }
    calculation.unshift(1);
    calculation.push(1);
    answer.push(calculation);
  }
  return answer;
};