/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let alphabet = new Array(128).fill(0);
  for(let i=0; i<s.length; i++) alphabet[s.charCodeAt(i)]++;
  for(let i=0; i<t.length; i++) alphabet[t.charCodeAt(i)]--;
  return alphabet.every(alpha => alpha === 0);
};