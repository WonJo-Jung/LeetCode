/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for(let i=0; i<flowerbed.length; ) {
    if(flowerbed[i+1] === 0) {
      if(flowerbed[i] === 0) n--;
      i += 2;
    }
    else if(flowerbed[i+1] === 1) i += 3;
    else {
      if(flowerbed[i] === 0) n--;
      i++;
    }
  }
  if(n <= 0) return true;
  else return false;
};