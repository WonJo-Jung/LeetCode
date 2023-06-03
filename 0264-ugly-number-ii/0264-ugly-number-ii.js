/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let uglys = [0,1,2,3,4,5]
  let nexts = [0,1,3,3,4,5];
  let min = Infinity;
  for(let i=6; i<=n; i++) {
    for(let j=2; j<nexts.length; j++) {
      if(uglys[j] * uglys[nexts[j]] <= uglys[uglys.length-1]) {
        nexts[j]++;
      }
      min = Math.min(min, uglys[j] * uglys[nexts[j]]);
    }
    uglys[uglys.length] = min;
    nexts[nexts.length] = i;
    min = Infinity;
  }
  return uglys[n];
};