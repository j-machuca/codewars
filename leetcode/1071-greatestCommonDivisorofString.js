// 1071. Greatest Common Divisor of Strings
// Easy
// Topics
// Companies
// Hint

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

//     1 <= str1.length, str2.length <= 1000
//     str1 and str2 consist of English uppercase letters.

var gcdOfStrings = function (str1, str2) {
  // code

  // contactenating both string in reverse order should be equal to have a valid GCD

  if (str1 + str2 !== str2 + str1) return "";

  // calculate the length of both strings

  let [len1, len2] = [str1.length, str2.length];

  // define a helper function
  function isValid(i) {
    //  check if the length of the substring will be a divisor of both strings
    // if not is should return false since there's no way to reproduce boths strings with the current substring
    if (len1 % i !== 0 || len2 % i !== 0) return false;
    // attempt to reproduce both strings by multiplying the substring by the
    // amount of times needed to reach str1 and str2 length and check if they match

    return (
      str1.slice(0, i).repeat(len1 / i) === str1 &&
      str1.slice(0, i).repeat(len2 / i) === str2
    );
  }
  // get the shortest of both strings since shortest can make greater string but not the other way around

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isValid(i)) {
      // if they do return the substring
      return str1.slice(0, i);
    }
  }
  // No common substring
  return "";
};

// Slightly more memory efficient but pretty much on par

// function gcd (num1, num2) {
//   while (num2 !== 0) {
//       let temp = num2;
//       num2 = num1 % num2;
//       num1 = temp
//   }

//   return num1;
// }

// var gcdOfStrings = function(str1, str2) {
//   const str1Length = str1.length;
//   const str2Length = str2.length;
//   if(str1 + str2 !== str2 + str1) {
//       temp = ""
//       return temp;
//   }
//   const gcdValue = gcd(str1Length, str2Length)
//   return str1.substring(0, gcdValue);

// };
