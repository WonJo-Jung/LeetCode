/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let l = 1, r = n, m;
  while(l <= r) {
    m = Math.floor((l+r)/2);
    let total = m*(1+m)/2;
    if(total === n) return m;
    else if(total < n) l = m + 1;
    else r = m - 1;
  }
  return r;
};