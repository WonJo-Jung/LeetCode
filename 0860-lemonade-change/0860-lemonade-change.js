/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let map = new Map();
  map.set(5, 0); map.set(10, 0);
  for(const bill of bills) {
    if(bill === 5) map.set(5, map.get(5)+1); // change 0
    else if(bill === 10) { // change 5
      if(map.get(5) < 1) return false;
      map.set(5, map.get(5)-1);
      map.set(10, map.get(10)+1);
    }
    else if(bill === 20) { // change 10+5 or 5+5+5
      if(map.get(10) >= 1 && map.get(5) >= 1) {
        map.set(10, map.get(10)-1);
        map.set(5, map.get(5)-1);
      } else if(map.get(5) >= 3) map.set(5, map.get(5)-3);
      else return false;
    }
  }
  return true;
};