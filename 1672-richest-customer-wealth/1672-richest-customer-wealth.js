/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  for(let i=0; i<accounts.length; i++) {
    accounts[i] = accounts[i].reduce((acc, curr) => acc + curr, 0);
  }
  return Math.max.apply(null, accounts);
};