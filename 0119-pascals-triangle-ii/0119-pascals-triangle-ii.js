/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let answer = [1];
  for(let i=1; i<=rowIndex; i++) {
    let cal1 = JSON.parse(JSON.stringify(answer));
    cal1.push(0);
    let cal2 = JSON.parse(JSON.stringify(answer));
    cal2.unshift(0);
    answer = cal1.map((v,i) => v+cal2[i]);
  }
  return answer;
};