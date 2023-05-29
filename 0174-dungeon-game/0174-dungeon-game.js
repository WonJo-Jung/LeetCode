/**
 * @param {number[][]} health
 * @return {number}
 */
var calculateMinimumHP = function(healths) {
  const m = healths.length;
  const n = healths[0].length;
  let dp = [];
  for(let i=0; i<m+1; i++) dp[i] = new Array(n+1).fill(Infinity);
  dp[m][n-1] = 1;
  dp[m-1][n] = 1;
  for(let i=m-1; i>=0; i--) {
    for(let j=n-1; j>=0; j--) {
      let need = Math.min(dp[i+1][j], dp[i][j+1]) - healths[i][j];
      dp[i][j] = need <= 0 ? 1 : need;
    }
  }
  return dp[0][0];
  
  /** WA
  let initials = [1];
  if(initials[0]+healths[0][0] <= 0) {
    initials[0] += 1-(initials[0]+healths[0][0]);
    healths[0][0] = 1;
  } else {
    healths[0][0] += initials[0];
  }
  for(let j=1; j<healths[0].length; j++) {
    if(healths[0][j-1]+healths[0][j] <= 0) {
      initials[j] = initials[j-1] + 1-(healths[0][j-1]+healths[0][j]);
      healths[0][j] = 1;
    } else {
      initials[j] = initials[j-1];
      healths[0][j] += healths[0][j-1];
    }
  }
  for(let i=1; i<healths.length; i++) {
    if(healths[i-1][0]+healths[i][0] <= 0) {
      initials[0] += 1-(healths[i-1][0]+healths[i][0]);
      healths[i][0] = 1;
    } else {
      healths[i][0] += healths[i-1][0];
    }
    for(let j=1; j<healths[i].length; j++) {
      if(initials[j-1] > initials[j]) {
        if(healths[i-1][j]+healths[i][j] <= 0) {
          initials[j] += 1-(healths[i-1][j]+healths[i][j]);
          healths[i][j] = 1;
        } else {
          healths[i][j] += healths[i-1][j];
        }
      } else {
        if(healths[i][j-1]+healths[i][j] <= 0) {
          initials[j] += 1-(healths[i][j-1]+healths[i][j]);
          healths[i][j] = 1;
        } else {
          initials[j] = initials[j-1];
          healths[i][j] += healths[i][j-1];
        }
      }
    }
  }
  return initials[initials.length-1];
  */
};