/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split("").sort((a,b) => a.charCodeAt() - b.charCodeAt()).join("") === t.split("").sort((a,b) => a.charCodeAt() - b.charCodeAt()).join("");
};