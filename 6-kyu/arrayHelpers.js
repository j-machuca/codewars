/*

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!

*/

Object.assign(Array.prototype, {
  square() {
    return this.map((elem) => elem ** 2);
  },

  cube() {
    return this.map((elem) => elem ** 3);
  },

  average() {
    return this.length > 0 ? this.sum() / this.length : NaN;
  },
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0);
  },

  even() {
    return this.filter((elem) => elem % 2 === 0);
  },

  odd() {
    return this.filter((elem) => !(elem % 2 == 0));
  },
});
