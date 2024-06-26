// 1. Two Sum

import { diff } from "@vitest/utils/diff";

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

export var twoSum = function (nums, target) {
  let remainderMap = new Map();

  // Iterate over nums

  for (let i = 0; i < nums.length; i++) {
    // calculate the remainder

    let remainder = target - nums[i];

    // if remainder is in the map
    if (remainderMap.has(remainder)) {
      // return the value stored in that remainder key that should equal the index at which that value was found
      return [remainderMap.get(remainder), i];
      // if remainder is not in the map
    }
    // add the remainder as a key and the index as a value
    remainderMap.set(nums[i], i);
  }
  return null;
};
