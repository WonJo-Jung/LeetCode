/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let answers = [];
    for(let i=0; i<accounts.length; i++) {
        answers.push(accounts[i].reduce((acc, curr) => acc + curr, 0));
    }
    return Math.max.apply(null, answers);
};