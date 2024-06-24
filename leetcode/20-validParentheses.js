/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // length must be even to have at least enough parentheses to be valid(at least one pair of corresponding parentheses)
  if (s.length % 2 !== 0) return false;

  // Create a map to hold the pair of opening and closing brackets
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  // create a stack to hold parentheses and pop when closed
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // check if character is an closing paren
    if (map.has(s[i])) {
      // if its a closing paren and there is an opening paren in stack
      if (stack.length > 0 && stack[stack.length - 1] === map.get(s[i])) {
        // if they match remove from the stack

        stack.pop();
      } else {
        // if the stack is empty or they do not match return false
        return false;
      }
    } else {
      // if its a opening parentheses

      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
};
