/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let output = [[""],["()"]];
  let num = 2;
  while(num <= n) {
    let arr = [];
    for(let count=0; count<num; count++) {
      for(let i=0; i<output[count].length; i++) { // f(0), f(1), f(2)
        for(let j=0; j<output[num-1-count].length; j++) { // f(2), f(1), f(0)
          arr.push("("+ output[count][i] +")" + output[num-1-count][j]);
        }
      }
    }
    output[num++] = arr;
  }
  return output[n];
  
  // let output = ["()"];
  // let num = 2;
  // while(num++ <= n) {
  //   let len = output.length;
  //   while(len--) {
  //     let parentheses = output.shift();
  //     let count = parentheses.length;
  //     for(let i=0; i<=count; i++) {
  //       for(let j=i+1; j<count+2; j++) {
  //         let new_parentheses = "";
  //         new_parentheses += parentheses.slice(0, i) + "(";
  //         new_parentheses += parentheses.slice(i, j-1) + ")" + parentheses.slice(j-1, count);
  //         output.push(new_parentheses);
  //       }
  //     }
  //     output = Array.from(new Set([...output]));
  //   }
  // }
  // return output;
};