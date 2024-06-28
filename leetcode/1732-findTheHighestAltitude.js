/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // need a variable to store the max altituted achieved
  let max = 0;
  // The biker starts his trip on point 0 with altitude equal 0.
  let current = 0;

  // iterate over the array
  for (let i = 0; i < gain.length; i++) {
    // get the new current altitude
    current += gain[i];

    // if the new current altitude is higher than 0 set it to new max
    if (current > max) {
      max = current;
    }
  }

  return max;
};
