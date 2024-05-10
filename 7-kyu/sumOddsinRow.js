// Given the triangle of consecutive odd numbers:
/*
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

*/

function rowSumOddNumbers(n) {
  /*
    lets find out what is the first summand: before first summand we have 1 + 2 + 3 + ... + n-1 odd numbers, their amount is ((n-1)*n)/2. 
    So, first summand after them is ((n-1)*n)/2  * 2 + 1 = (n-1)*n + 1.

    Now we should just calculate our sum:
    row_sum_odd_numbers(n)= (n-1)*n + 1 + (n-1)*n + 3 + (n-1)*n + 5  +...+ (n-1)*n + 2*n - 1 =
    (n-1)*n*n + 1 + 3 + 5 + ... + 2*n -1 = n^3 - n^2 + n^2 = n^3 

    row_sum_odd_numbers(4) = (4-1)*4 + 1 + (4-1)*4 + 3 + (4-1)*4 + 5 + (4-1)*4 + 7 = 
    row_sum_odd_numbers(4) = 13 + 15 + 17 + 19 = 64

    */

  return n ** 3;
}
