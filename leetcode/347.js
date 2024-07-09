// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let numsCount = new Map();

  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) return nums;

  while (left <= right) {
    if (numsCount.has(nums[left])) {
      numsCount.set(nums[left], numsCount.get(nums[left]) + 1);
    } else {
      numsCount.set(nums[left], 1);
    }
    if (numsCount.has(nums[right])) {
      numsCount.set(nums[right], numsCount.get(nums[right]) + 1);
    } else {
      numsCount.set(nums[right], 1);
    }

    left++;
    right--;
  }

  let bucket = Array(nums.length + 1).fill(Array(0));

  // k = number v= occurrence
  for (let [k, v] of numsCount.entries()) {
    if (bucket[v]) {
      bucket[v] = [...bucket[v], k];
    } else {
      bucket[v] = [k];
    }
  }

  let result = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (let j = 0; j < bucket[i].length; j++) {
      result.push(bucket[i][j]);
      if (result.length === k) {
        return result;
      }
    }
  }
};
