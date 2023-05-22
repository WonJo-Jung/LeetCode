/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const m = s1.length, n = s2.length;
  if(m+n !== s3.length) return false;
  let dp = new Array(m+1);
  for(let i=0; i<m+1; i++) {
    dp[i] = new Array(n+1).fill(false);
  }
  dp[0][0] = true;
  for(let i=1; i<m+1; i++) {
    dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
  }
  for(let j=1; j<n+1; j++) {
    dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];
  }
  for(let i=1; i<m+1; i++) {
    for(let j=1; j<n+1; j++) {
      let choose_s1 = false, choose_s2 = false;
      if(s1[i-1] === s3[i+j-1]) {
        choose_s1 = dp[i-1][j];
      }
      if(s2[j-1] === s3[i+j-1]) {
        choose_s2 = dp[i][j-1];
      }
      dp[i][j] = choose_s1 || choose_s2;
    }
  }
  return dp[m][n];
};