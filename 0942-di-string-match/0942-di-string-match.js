/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let arr = [];
  for(let i=0, j=s.length; i<=j; ) {
    if(s[arr.length] === "I" || i === j) arr[arr.length] = i++;
    else arr[arr.length] = j--;
  }
  return arr;
};