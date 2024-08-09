// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

//     1 <= haystack.length, needle.length <= 104
//     haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // haystack-> string
  // needle -> string
  // example  haystack  = sadbutsad
  //          needle    = sad

  // keep track of our running string

  let runningStr = "";
  let left = 0;
  let right = 0;

  // while our left pointer is less than the haystack length
  while (right < haystack.length) {
    // if our running string length is smaller than our needle length add to running string
    let newStr = (runningStr += haystack[right]);
    if (newStr.length < needle.length) {
      runningStr = newStr;
      right++;
      // handle equal length
    } else {
      // if they're equal length and content
      if (newStr === needle) {
        return left;
      } else {
        // they're of equal length but content does not match
        runningStr = newStr.slice(1);
        left++;
        right++;
      }
    }
  }

  // return -1 if we didnt find it
  return -1;
};
