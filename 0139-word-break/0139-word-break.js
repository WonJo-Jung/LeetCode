/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length+1).fill(false);
  dp[0] = true;
  for(let i=1; i<=s.length; i++) {
    for(let j=0; j<i; j++) {
      if(dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
  // let wordMap = new Map();
  // for(let i=0; i<wordDict.length; i++) {
  //   if( wordMap.has(wordDict[i][0]) ) {
  //     let arr = wordMap.get(wordDict[i][0]);
  //     arr.push(wordDict[i]);
  //   }
  //   else {
  //     let arr = [wordDict[i]];
  //     wordMap.set(wordDict[i][0], arr);
  //   }
  // }
  // return DFS(s, 0, wordMap);
};

/**TLE
 * @param {string} s
 * @param {number} index
 * @param {Map} wordMap
 * @return {boolean}
 */
let DFS = function(s, index, wordMap) {
  if(index === s.length) return true;
  if(!wordMap.has(s[index])) return false;
  let arr = wordMap.get(s[index]); // substrings starting with s[index]
  for(let i=0; i<arr.length; i++) {
    let includes = s.slice(index, index+arr[i].length) === arr[i];
    let segmented = false;
    if(includes) segmented = DFS(s, index+arr[i].length, wordMap);
    if(segmented) return true;
  }
  return false;
}