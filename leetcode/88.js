// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

//     nums1.length == m + n
//     nums2.length == n
//     0 <= m, n <= 200
//     1 <= m + n <= 200
//     -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // pointer to the last non 0 element in nums1
  let pointer1 = m - 1;
  // pointer to the last non 0 element in nums2
  let pointer2 = n - 1;

  // this is the index of the last 0 in the array  [ 1,2,3,0,0,0]
  let insertIdx = nums1.length - 1;

  // while I still have numbers that I need to merge
  while (pointer2 >= 0) {
    if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
      nums1[insertIdx] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[insertIdx] = nums2[pointer2];
      pointer2--;
    }
    insertIdx--;
  }

  return nums1;
};

// function merge(nums1, m, nums2, n) {
//   // Initialize pointers for nums1, nums2, and the end of the merged array
//   let i = m - 1; // pointer for the last element in the original part of nums1
//   let j = n - 1; // pointer for the last element in nums2
//   let k = m + n - 1; // pointer for the last position in nums1

//   // Iterate while there are elements to be compared in nums1 and nums2
//   while (i >= 0 && j >= 0) {
//      if the number in the first array is bigger than the one in the second array
//       if (nums1[i] > nums2[j]) {
//        make the number at the insert index equal the number in num1
//           nums1[k] = nums1[i];
//        decrease the index to compare
//           i--;
//       } else {
//          the number in the second array is bigger set it in the insert idx
//           nums1[k] = nums2[j];
//           j--;
//       }
//      update the insert idx
//       k--;
//   }

//   // If there are remaining elements in nums2, copy them into nums1
//   while (j >= 0) {
//      push the remaining items to their position
//       nums1[k] = nums2[j];
//      decrease the current index of the second array
//       j--;
//      decrease the insert idx
//       k--;
//   }
// }

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
// console.log(merge([2, 0], 1, [1], 1)); // [1,2]
