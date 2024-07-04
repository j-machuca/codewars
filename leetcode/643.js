/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let currentMax = 0;
  let currentSum = 0;

  // calculate the current max with the first window [0,4,0,3,2] k=1
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  currentMax = currentSum;
  // once the first window max is calculated start shifting the window

  // check if new max is > current max then set the current max to new max

  for (let w = k; w < nums.length; w++) {
    // the new max should remove whatever the previous number before the start of the window is and add the new number in the window

    currentSum = currentSum - nums[w - k] + nums[w];

    if (currentSum > currentMax) {
      currentMax = currentSum;
    }
  }

  return currentMax / k;
};
