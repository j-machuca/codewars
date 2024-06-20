// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:

//     1 <= word1.length, word2.length <= 100
//     word1 and word2 consist of lowercase English letters.

var mergeAlternately = function (word1, word2) {
  // pointer tracking first word
  let pointer1 = 0;
  // pointer tracking second word
  let pointer2 = 0;

  let result = "";

  // iterate over the max between word1.length and word2.length
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // if pointer1 is less than word1 length
    if (pointer1 < word1.length) {
      // append that character to string
      result += word1[pointer1];
      // increase the value of the pointer
      pointer1++;
    }

    // if pointer2 is less than word2 length
    if (pointer2 < word2.length) {
      // append that character to string
      result += word2[pointer2];
      // increase the value of the pointer
      pointer2++;
    }
  }

  return result;
};

// Found a better solution that reduces runtime

// var mergeAlternately = function(word1, word2) {
//     let result = ''
//     for(let i = 0; i<Math.max(word1.length,word2.length); i++){
//         result += word1.charAt(i) + word2.charAt(i)
//     }
//     return result
// };
