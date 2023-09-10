/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  score = score.map((s, index) => s = [s, index]);
  score.sort((a,b) => b[0] - a[0]);
  score = score.map((s, index) => s = [s[0], s[1], index]);
  score.sort((a,b) => a[1] - b[1]);
  for(let i=0; i<score.length; i++) {
    if(score[i][2] == 0) score[i] = "Gold Medal";
    else if(score[i][2] == 1) score[i] = "Silver Medal";
    else if(score[i][2] == 2) score[i] = "Bronze Medal";
    else score[i] = `${score[i][2]+1}`;
  }
  return score;
};