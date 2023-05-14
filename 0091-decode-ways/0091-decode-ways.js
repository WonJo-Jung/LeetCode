/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length;
  let dp = new Array(n+1).fill(0);
  dp[0]=1
  if(1*s[0] === 0) dp[1]=0
  else dp[1]=1
  for(let i=2; i<n+1; i++) {
    if(1*s[i-1] > 0 && 1*s[i-1] <= 9) dp[i] += dp[i-1];
    if(10*s[i-2]+1*s[i-1] >= 10 && 10*s[i-2]+1*s[i-1] <= 26)
      dp[i] += dp[i-2];
  }
  return dp[n];
  
  // if(!(1*s[0])) return 0;
  // const n = s.length;
  // let answer = n;
  // for(let i=1; i<n; i++) {
  //   if(!(1*s[i])) {
  //     if(1*s[i-1] === 1 || 1*s[i-1] === 2) {
  //       answer--;
  //       if(i-1 > 0) answer--;
  //       continue;
  //     }
  //     else return 0;
  //   }
  //   if(1*s[i-1] === 1) continue;
  //   else if(1*s[i-1] === 2) {
  //     if(1*s[i] <= 6) continue;
  //     else answer--;
  //   }
  //   else if(1*s[i-1] === 0 || 1*s[i-1] >= 3) answer--;
  // }
  // return answer;
};