/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let ranks = JSON.parse(JSON.stringify(score)).sort((a,b) => b-a);
  let answer = [];
  for(let i=0; i<score.length; i++) {
    let rank = ranks.indexOf(score[i]);
    if(rank == 0) answer.push("Gold Medal");
    else if(rank == 1) answer.push("Silver Medal");
    else if(rank == 2) answer.push("Bronze Medal");
    else answer.push(`${rank+1}`);
  }
  return answer;
};