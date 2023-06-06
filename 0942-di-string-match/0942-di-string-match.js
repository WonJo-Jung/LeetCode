/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let arr = [], index = 0;
  for(let i=0, j=s.length; i<=j; ) {
    if(s[index++] === "I" || i === j) arr[arr.length] = i++;
    else arr[arr.length] = j--;
  }
  return arr;
};