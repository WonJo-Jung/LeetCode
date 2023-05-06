/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  let dp = new Array(n);
  for(let i=0; i<n; i++) {
    dp[i] = new Array(n);
  }
  let start = 0, max_length = 0;
  for(let i=n-1; i>=0; i--) {
    for(let j=i; j<n; j++) {
      dp[i][j] = s[i] === s[j] && (j-i<3 || dp[i+1][j-1]);
      if(dp[i][j] && j-i+1 > max_length) {
        start = i;
        max_length = j-i+1;
      }
    }
  }
  return s.slice(start, start + max_length);
  
//   if(isPalindrome(s)) return s;
//   let queue = [s];
//   while(queue.length) {
//     let str = queue.shift();

//     let left = str.slice(1, str.length);
//     if(isPalindrome(left)) return left;
//     else queue.push(left);
    
//     let right = str.slice(0, str.length-1);
//     if(isPalindrome(right)) return right;
//     else queue.push(right);
//   }
};

// let isPalindrome = function(new_s) {
//   const half = Math.floor(new_s.length / 2);
//   if(new_s.length % 2 == 1) new_s = new_s.slice(0, half) + new_s.slice(half+1, new_s.length);
//   let left = new_s.slice(0, half).split("").reverse().join("");
//   let right = new_s.slice(half).toString();
//   return left === right;
// }