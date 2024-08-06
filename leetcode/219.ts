// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     0 <= k <= 105

let l = console.log;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// USING A SET

var containsNearbyDuplicate = function (nums: number[], k: number): boolean {
  let numSet = new Set();

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      numSet.delete(nums[left]);
      left++;
    }
    if (numSet.has(nums[right])) {
      return true;
    }
    numSet.add(nums[right]);
  }

  return false;
};

// USING A MAP

// var containsNearbyDuplicate = function (nums: number[], k: number): boolean {
//   let seenNumber = new Map();

//   // iterate over the nums array
//   for (let i = 0; i < nums.length; i++) {
//     // check if we've seen the number`
//     if (seenNumber.has(nums[i])) {
//       let lastSeenIdx = seenNumber.get(nums[i]);
//       // if the distance between the last seen and the new one is less than k
//       if (Math.abs(lastSeenIdx - i) <= k) {
//         // return true
//         return true;
//       } else {
//         // distance is not smaller so update to new value
//         seenNumber.set(nums[i], i);
//       }
//     } else {
//       // havent seen this number yet
//       seenNumber.set(nums[i], i);
//     }
//   }

//   return false;
// };

// UNOPTIMIZED SOLUTION -> LITERALLY A AWFUL DOUBLE WHILE LOOP WITH TWO POINTERS

// var containsNearbyDuplicate = function (nums: number[], k: number): boolean {
//   let left = 0;
//   let right = left + 1;

//   // left pointer that need to go through the entire array
//   while (left < nums.length && left < right) {
//     // go over the next k elements
//     let upperBound = left + k;

//     while (right <= upperBound && right < nums.length) {
//       if (nums[left] === nums[right]) {
//         return true;
//       }
//       right++;
//     }
//     left++;
//     right = left + 1;
//   }

//   return false;
// };

l(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
l(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
l(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
