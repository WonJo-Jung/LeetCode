/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map();
  for(let i=0; i<s.length; i++) {
    if(map.has(s[i])) map.set(s[i], map.get(s[i])+1);
    else map.set(s[i], 1);
  }
  let len = 0, odd = false;
  map.forEach((value) => {
    if(value%2 === 0) {
      len += value;
    } else {
      len += value-1;
      odd = true;
    }
  });
  if(odd) len++;
  return len;
};