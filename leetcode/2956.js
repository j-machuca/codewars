// 2956. Find Common Elements Between Two Arrays

// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

//     answer1 : the number of indices i such that nums1[i] exists in nums2.
//     answer2 : the number of indices i such that nums2[i] exists in nums1.

// Return [answer1,answer2].

// Example 1:

// Input: nums1 = [2,3,2], nums2 = [1,2]

// Output: [2,1]

// Explanation:

// Example 2:

// Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]

// Output: [3,4]

// Explanation:

// The elements at indices 1, 2, and 3 in nums1 exist in nums2 as well. So answer1 is 3.

// The elements at indices 0, 1, 3, and 4 in nums2 exist in nums1. So answer2 is 4.

// Example 3:

// Input: nums1 = [3,4,2,3], nums2 = [1,5]

// Output: [0,0]

// Explanation:

// No numbers are common between nums1 and nums2, so answer is [0,0].

// Constraints:

//     n == nums1.length
//     m == nums2.length
//     1 <= n, m <= 100
//     1 <= nums1[i], nums2[i] <= 100

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// this is using a set but can probably do better with a map
var findIntersectionValues = function (nums1, nums2) {
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);

  let result = [0, 0];

  for (let num of nums1) {
    if (nums2Set.has(num)) {
      result[0]++;
    }
  }

  for (let num of nums2) {
    if (nums1Set.has(num)) {
      result[1]++;
    }
  }

  return result;
};
