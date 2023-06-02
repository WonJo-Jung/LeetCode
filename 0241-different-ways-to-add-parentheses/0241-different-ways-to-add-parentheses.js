/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  let exp = [expression[0]];
  for(let i=1; i<expression.length; i++) {
    if(Number.isInteger(Number(expression[i-1])) &&
    Number.isInteger(Number(expression[i]))) exp[exp.length-1] += expression[i];
    else exp[exp.length] = expression[i];
  }
  return addParenthes(exp, 0, Math.floor(exp.length/2));
};

let addParenthes = function (exp, s, e) {
  if(s === e) return [Number(exp[2*s])];
  if(e-s === 1) {
    if(exp[(2*e+2*s)/2] === '+') return [Number(exp[2*s]) + Number(exp[2*e])];
    else if(exp[(2*e+2*s)/2] === '-') return [Number(exp[2*s]) - Number(exp[2*e])];
    else if(exp[(2*e+2*s)/2] === '*') return [Number(exp[2*s]) * Number(exp[2*e])];
  }
  let arr = [];
  for(let i=0; i<e-s; i++) {
    let lres = addParenthes(exp, s, s+i), rres = addParenthes(exp, s+i+1, e);
    let op = exp[2*(s+i)+1];
    for(let j=0; j<lres.length; j++) {
      for(let k=0; k<rres.length; k++) {
        if(op === '+') arr[arr.length] = lres[j] + rres[k];
        else if(op === '-') arr[arr.length] = lres[j] - rres[k];
        else if(op === '*') arr[arr.length] = lres[j] * rres[k];
      }
    }
  }
  return arr;
}