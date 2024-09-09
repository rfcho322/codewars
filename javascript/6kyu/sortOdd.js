/* SORT THE ODD

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Example
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArray(array) {
    //EXTRACT THE ODD NUMBERS FROM THE ARRAY
    //SORT THE ODD NUMBERS IN ASCENDING ORDER
    //USING THE ORIGINAL ARRAY, ITERATE OVER IT AND REPLACE EACH ODD NUMBERS WITH THE SORTED ODDS
      
      let oddNumbers = []
      
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          oddNumbers.push(array[i])
        }
      }
      
      oddNumbers.sort((a, b) => a - b)
      
      let oddNumIndex = 0
      
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          array[i] = oddNumbers[oddNumIndex]
          oddNumIndex++
        }
      }
      
      return array
}