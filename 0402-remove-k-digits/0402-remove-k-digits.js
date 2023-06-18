/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = [], i = 0;
  for(; i<num.length; i++) {
    while(stack.length > 0 && stack[stack.length-1] > num[i] && k > 0) {
      stack.pop(); k--;
    }
    stack[stack.length] = num[i];
  }
  let str = stack.join("");
  let left = str.slice(0, str.length - k);
  let right = str.slice(k);
  let answer = left < right ? left : right;
  for(i=0; i<answer.length; i++) if(answer[i] !== "0") break;
  return i === answer.length ? "0" : answer.slice(i);
};