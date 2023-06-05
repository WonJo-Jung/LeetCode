/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a,b) => b-a);
  s = s.sort((a,b) => b-a);
  let gratify = 0, cookie = 0;
  for(let i=0; i<g.length; i++) {
    if(g[i] <= s[cookie]) {
      gratify++;
      cookie++;
    }
  }
  return gratify;
};