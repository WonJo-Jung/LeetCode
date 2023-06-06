/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;
  for(let i=0; i<bills.length; i++) {
    if(bills[i] === 5) five++; // change 0
    else if(bills[i] === 10) { // change 5
      if(five < 1) return false;
      five--;
      ten++;
    }
    else if(bills[i] === 20) { // change 10+5 or 5+5+5
      if(ten >= 1 && five >= 1) {
        ten--;
        five--;
      } else if(five >= 3) five -= 3;
      else return false;
    }
  }
  return true;
};