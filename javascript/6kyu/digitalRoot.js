
/* SUM OF DIGITS/DIGITAL ROOT 

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/


function digitalRoot(n) {
    while (n >= 10) {
      let sum = 0;
      for(let value of n.toString()) {
        sum += parseInt(value);
      }
      n = sum;
    }
    return n;
}