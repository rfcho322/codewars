/* STOPS GNINNIPS MY SDORW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string){
    // SPLIT THE WORDS
    // CREATE A FUNCTION TO REVERSE A WORD
    // MAP THROUGH THE WORDS TO CHECK THE LENGTH OF THE WORD AND APPLY REVERSE TO IT
    // FINALLY COMBINE THE WORDS TOGETHER, INCLUDING THE REVERSED VERSION OF THE
    // WORDS WITH MORE THAN 5 LETTERS
      
      string = string.split(' ')
      
      const reverseWord = (str) => str.split('').reverse().join('')
    
      const mapWords = string.map(word => {
        return word.length >= 5 ? reverseWord(word) : word;
      })
      
      return mapWords.join(' ')
      
}