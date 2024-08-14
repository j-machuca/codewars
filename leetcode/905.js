// 905. Sort Array By Parity
// Easy
// Topics
// Companies

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArrayByParity = function (nums) {
//   // if (nums.length === 1) {
//   //   return nums;
//   // }

//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] % 2 === 1 && nums[j] % 2 === 0) {
//         [nums[j], nums[i]] = [nums[i], nums[j]];
//       }
//     }
//   }

//   return nums;
// };

var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else {
      if (nums[right] % 2 === 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      } else {
        right--;
      }
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); //
