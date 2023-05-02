/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let answer = -1;
    for(let i=0; i<accounts.length; i++) {
        const total = accounts[i].reduce((acc, curr) => acc + curr, 0);
        if(answer < total) answer = total;
    }
    return answer;
};