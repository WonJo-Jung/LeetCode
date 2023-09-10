/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let alphabet = new Array(26).fill(0);
  for(let i=0; i<s.length; i++) alphabet[s.charCodeAt(i) - 97]++;
  for(let i=0; i<t.length; i++) alphabet[t.charCodeAt(i) - 97]--;
  for(let i=0; i<26; i++) if(alphabet[i] != 0) return String.fromCharCode(i+97);
};