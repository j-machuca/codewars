// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

//     1 <= s.length <= 3 * 105
//     s consist of printable ASCII characters.

var reverseVowels = function (s) {
  // Need two pointers to store current position of each character to be checked
  let left = 0;
  let strArr = s.split("");
  let right = strArr.length - 1;

  // Could reduce the amount of items in set by calling toLower before checking
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // iterate over string while the left pointer is less than the right pointer

  while (left < right) {
    // if character at the left is a vowel and char at right is a vowel swap
    if (vowels.has(strArr[left]) && vowels.has(strArr[right])) {
      let tmp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = tmp;
      // let [s[left],s[right]] = [s[right],s[left]]
      // increment left and decrement right
      left++;
      right--;
    } else if (vowels.has(s[left])) {
      // if left is a vowel decrement right
      right--;
    } else {
      // if right is a vowel increment left
      left++;
    }
  }

  return strArr.join("");
};
