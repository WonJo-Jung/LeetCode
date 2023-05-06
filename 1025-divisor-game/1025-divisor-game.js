/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  let player = 0;
  while(n > 1) {
    let x = 1;
    n -= x;
    player = (player+1) % 2;
  }
  if(player == 0) return false;
  else if(player == 1) return true;
};

// let getMaxFactor = function(n) {
//   for(let i=2; i<=Math.sqrt(n); i++) {
//     if(n % i == 0) return n / i;
//   }
//   return 1;
// }