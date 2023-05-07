/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let output = ["()"];
  let num = 2;
  while(num++ <= n) {
    let len = output.length;
    while(len--) {
      let parentheses = output.shift();
      let count = parentheses.length;
      for(let i=0; i<=count; i++) {
        for(let j=i+1; j<count+2; j++) {
          let new_parentheses = "";
          new_parentheses += parentheses.slice(0, i) + "(";
          new_parentheses += parentheses.slice(i, j-1) + ")" + parentheses.slice(j-1, count);
          output.push(new_parentheses);
        }
      }
      output = Array.from(new Set([...output]));
    }
  }
  return output;
};