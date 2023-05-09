/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const n = nums.length;
  /*
   ** Fourth Kadane's approach
  let localMax = nums[0];
  let globalMax = nums[0];
  for(let i=1; i<n; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if(globalMax < localMax) globalMax = localMax;
  }
  return globalMax;
  */
  // ** third DP apparoach - Success **
  let dp = new Array(n);
  dp[0] = nums[0];
  let max = dp[0];
  for(let i=1; i<n; i++) {
    dp[i] = nums[i] + (dp[i-1] > 0 ? dp[i-1] : 0);
    max = Math.max(max, dp[i]);
  }
  return max;
  /*
   ** second approach - Wrong Answer **
  let count = 1;
  let map = new Map();
  let max = -Infinity;
  while(count <= n) {
    for(let i=0; i<=n-count; i++) {
      let sum;
      if(count == 1) {
        sum = nums[i];
        map.set(`${i},${i}`, sum);
        if(max < sum) max = sum;
      }
      else if(count == 2) {
        sum = nums[i] + nums[i+1];
        map.set(`${i},${i+1}`, sum);
        if(max < sum) max = sum;
      }
      else {
        sum = map.get(`${i},${i+count-2}`) + nums[i+count-1];
        map.set(`${i},${i+count-1}`, sum);
        if(max < sum) max = sum;
      }
    }
    count++;
  }
  return max;
  */
  /*
   ** first approach - Wrong Answer **
  let max = -Infinity, max_indexes = [];
  for(let i=0; i<n; i++) {
    if(max < nums[i]) {
      max_indexes = [i];
      max = nums[i];
    } else if(max == nums[i]) {
      max_indexes[max_indexes.length] = i;
    }
  }
  // console.log(max_indexes)
  let answer = [];
  for(let i=0; i<max_indexes.length; i++) {
    const index = max_indexes[i];
    let left = index-1, right = index+1;
    // let part = nums[index], sum = nums[index];
    let part = nums[index], sum = [part];
    while(left >= 0 || right <= n-1) {
      if(left >= 0 && right <= n-1) {
        if(nums[left] < nums[right]) {
          part += nums[right++];
          // if(part > sum) sum = part;
          sum.push(part);
        } else {
          part += nums[left--];
          // if(part > sum) sum = part;
          sum.push(part);
        }
      } else if(left >= 0) {
        part += nums[left--];
        // if(part > sum) sum = part;
        sum.push(part);
      } else if(right <= n-1) {
        part += nums[right++];
        // if(part > sum) sum = part;
        sum.push(part);
      }
    }
    answer[i] = Math.max.apply(null, sum);
  }
  // console.log(answer)
  return Math.max.apply(null, answer);
  */
};