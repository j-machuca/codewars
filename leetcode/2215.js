/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let result1 = [];
  let result2 = [];

  for (let num of set1) {
    if (!set2.has(num)) {
      result1.push(num);
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      result2.push(num);
    }
  }

  // Could refactor to use a filter method on each set and return those in one line
  return [result1, result2];
};
