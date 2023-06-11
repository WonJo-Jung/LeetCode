/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  let times = 0;
  while(n > 1) {
    if(n%2===0) {
      n /= 2;
      times++;
    }
    else {
      let count1 = 1, num1 = n+1;
      while(num1%2 === 0) {
        count1++;
        num1 /= 2;
      }
      let count2 = 1, num2 = n-1;
      while(num2%2 === 0) {
        count2++;
        num2 /= 2;
      }
      if(num1 !== 1 && num2 !== 1) {
        if(count1 > count2) {
          times += count1;
          n = num1;
        } else {
          times += count2;
          n = num2;
        }
      } else if(num1 === 1 && num2 === 1) {
        if(count1 > count2) {
          times += count2;
          n = num2;
        } else {
          times += count1;
          n = num1;
        }
      } else if(num1 === 1) {
        times += count1;
        n = num1;
      } else if(num2 === 1) {
        times += count2;
        n = num2;
      }
    }
  }
  return times;
};