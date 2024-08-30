/* BEGINNER SERIES #3 SUM OF NUMBERS
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

function getSum(a, b)
{
//INPUT ARE 2 INTEGERS, POSITIVE OR NEGATIVE, IN ANY ORDER
//GET BOTH MIN AND MAX INTEGERS AND STORE THEM IN VARIABLES
//LOOP FROM MIN TO MAX AND INCREMENT SUM
//OUTPUT IS SINGLE INTEGER

  let sum = 0
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  
  for (let i = min; i <= max; i++) {
    sum += i
  }
  
  return sum

}