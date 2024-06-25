// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

//     1 <= flowerbed.length <= 2 * 104
//     flowerbed[i] is 0 or 1.
//     There are no two adjacent flowers in flowerbed.
//     0 <= n <= flowerbed.length

var canPlaceFlowers = function (flowerbed, n) {
  let availablePlots = 0;

  // iterate over the array
  for (let i = 0; i < flowerbed.length; i++) {
    // get the previous plot if its the first item in the array set it to 0
    let prev = flowerbed[i - 1] || 0;
    // get the current value in the plot
    let curr = flowerbed[i];
    // get the next plot if its the last item we're iterating on set it to 0
    let next = flowerbed[i + 1] || 0;

    if (prev === 0 && curr !== 1 && next === 0) {
      availablePlots++;
      flowerbed[i] = 1;
    }
  }

  return n > availablePlots ? false : true;
};
