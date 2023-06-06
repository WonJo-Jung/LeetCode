/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  for(let i=0; i<gas.length; i++) {
    if(gas.length > 1 && cost.length > 1 &&
      gas[i] === gas[(i-1)<0?gas.length-1:i-1] && cost[i] === cost[(i-1)<0?cost.length-1:i-1]) continue;
    if(gas[i] >= cost[i]) {
      let j = 0, fuel = gas[i];
      while(j<gas.length && fuel >= cost[(i+j) % gas.length]) {
        fuel -= cost[(i+j) % gas.length];
        j++;
        fuel += gas[(i+j) % gas.length];
      }
      if(j === gas.length) return i;
    }
  }
  return -1;
};