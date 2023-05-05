/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // while(s.length && t.indexOf(s[0]) != -1) {
  //   let pos = t.indexOf(s[0]);
  //   s = s.slice(1, s.length);
  //   t = t.slice(pos+1, t.length);
  // }
  // if(!s.length) return true;
  // else return false;
  
  
    let i = 0, j = 0;
    while( j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length ? true: false;
};