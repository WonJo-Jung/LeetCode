/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 1, r = x, m;
  while(l <= r) {
    m = Math.floor((l+r)/2);
    if(m*m === x) return m;
    else if(m*m < x) l = m+1;
    else r = m-1;
  }
  return r;
};