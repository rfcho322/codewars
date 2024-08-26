/* COUNTING DUPLICATES 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
*/

function duplicateCount(text){
    //CONVERT THE STRING TO LOWERCASE TO MAKE IT CASE-INSENSITIVE
    //SPLIT THE TEXT
    //USE REDUCE TO CREATE AN OBJECT THAT TRACKS THE TIMES A CHARACTER APPEARS IN THE STRING
    //EXTRACT THE VALUES IN THE OBJECT
    //FILTER THE VALUES THOSE COUNTS TO ONLY INCLUDE COUNTS GREATER THAN 1
    //FINALLY, RETURN THE LENGTH OF THE FILTERED ARRAY.
    
    text = text.toLowerCase()
      
    const count = text.split('').reduce((accumulator, currentValue) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++
        } else {
            accumulator[currentValue] = 1
        }
        return accumulator
    }, {});
    
    return Object.values(count).filter(count => count > 1).length
}