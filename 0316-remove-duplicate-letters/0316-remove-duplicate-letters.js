/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let lastIndex = [];
  for(let i=0; i<s.length; i++) {
    lastIndex[s.charCodeAt(i) - 97] = i;
  }
  
  let seen = new Array(26).fill(false);
  let stack = [];
  
  for(let i=0; i<s.length; i++) {
    let curr = s.charCodeAt(i) - 97;
    if(seen[curr]) continue;
    while(stack.length > 0 && stack[stack.length-1] > curr && i < lastIndex[stack[stack.length-1]]) {
      seen[stack.pop()] = false;
    }
    stack.push(curr);
    seen[curr] = true;
  }
  let str = "";
  for(let i=0; i<stack.length; i++) {
    str += String.fromCharCode(stack[i] + 97);
  }
  return str;
};