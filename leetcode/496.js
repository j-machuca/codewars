// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:

//     1 <= nums1.length <= nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 104
//     All integers in nums1 and nums2 are unique.
//     All the integers of nums1 also appear in nums2.

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // since nums 1 is a subset of nums2 we can use the length of nums2 to determine the size of the stack?

  // nums1 [4,1,2]
  // nums2 [1,3,4,2]

  const map = new Map();
  const stack = [];

  for (let num of nums2) {
    // while the stack is not empty and the last number in the stack is less than the current number.
    while (stack.length && stack[stack.length - 1] < num) {
      // Remove the smaller number from the stack
      let removedItem = stack.pop();
      // add it to the map and current number to the stack that is greater than that one.
      map.set(removedItem, num);
    }
    // the stack is empty or the number in the stack is greater than the last one in the stack.
    stack.push(num);
  }

  for (let idx in nums1) {
    nums1[idx] = map.get(nums1[idx]) || -1;
  }

  return nums1;
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);

console.log("---------------------------------------------");

nextGreaterElement([2, 4], [1, 2, 3, 4]);

console.log("---------------------------------------------");

nextGreaterElement([2, 3], [3, 5, 1, 2]);
