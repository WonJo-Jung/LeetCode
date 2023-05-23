/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let m = s1.length, n = s2.length;
  if(m+n !== s3.length) return false;
  if(n > m) {
    let tmp = m; m = n; n = tmp;
    tmp = s1; s1 = s2; s2 = tmp;
  }
  let dp = new Array(n+1);
  dp[0] = true;
  // let dp = new Array(m+1);
  // for(let i=0; i<m+1; i++) {
  //   dp[i] = new Array(n+1).fill(false);
  // }
  // dp[0][0] = true;
  // for(let i=1; i<m+1; i++) {
  //   dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
  // }
  for(let j=1; j<n+1; j++) {
    dp[j] = dp[j-1] && s2[j-1] === s3[j-1];
    // dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];
  }
  for(let i=1; i<m+1; i++) {
    dp[0] = dp[0] && s1[i-1] === s3[i-1];
    for(let j=1; j<n+1; j++) {
      let choose_s1 = false, choose_s2 = false;
      if(s1[i-1] === s3[i+j-1]) {
        choose_s1 = dp[j];
        // choose_s1 = dp[i-1][j];
      }
      if(s2[j-1] === s3[i+j-1]) {
        choose_s2 = dp[j-1];
        // choose_s2 = dp[i][j-1];
      }
      dp[j] = choose_s1 || choose_s2;
      // dp[i][j] = choose_s1 || choose_s2;
    }
  }
  return dp[dp.length-1];
};