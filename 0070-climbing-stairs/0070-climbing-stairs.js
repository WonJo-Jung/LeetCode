/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // let map = new Map();
  // map.set(1, ["1"]);
  // map.set(2, ["1+1", "2"]);
  // let step = 3;
  // while(step <= n) {
  //   let cases = [];
  //   for(let i=1; i<step; i++) {
  //     const left_term = map.get(i);
  //     const right_term = map.get(step-i);
  //     for(let a=0; a<left_term.length; a++) {
  //       for(let b=0; b<right_term.length; b++) {
  //         cases.push(left_term[a] + "+" + right_term[b]);
  //       }
  //     }
  //   }
  //   cases = Array.from(new Set([...cases]));
  //   map.set(step, cases);
  //   step++;
  // }
  // const answer = map.get(n);
  // return answer.length;
  
  if(n == 1) return 1;
  else if(n == 2) return 2;
  else {
    let answers = [1,2];
    for(let i=2; i<n; i++) {
      answers.push(answers[i-2] + answers[i-1]);
    }
    return answers.pop();
  }
};