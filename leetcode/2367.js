// 2367. Number of Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

//     i < j < k,
//     nums[j] - nums[i] == diff, and
//     nums[k] - nums[j] == diff.

// Return the number of unique arithmetic triplets.

// /**
//  * @param {number[]} nums
//  * @param {number} diff
//  * @return {number}
//  */

var arithmeticTriplets = function (nums, diff) {
  let numSet = new Set();
  let count = 0;
  for (let num of nums) {
    numSet.add(num);
  }

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i] + diff) && numSet.has(nums[i] + 2 * diff)) {
      count++;
    }
  }
  return count;
};
