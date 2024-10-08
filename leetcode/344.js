// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

//     1 <= s.length <= 105
//     s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // get a pointer to the first element
  let left = 0;

  // get the pointer at the end of the array
  let right = s.length - 1;

  // iterate over the array until the pointers reach each other
  while (left < right) {
    // swap the elements around
    [s[left], s[right]] = [s[right], s[left]];
    // move the left pointer
    left++;
    // move the right pointer
    right--;
  }
  // return the array
  return s;
};
