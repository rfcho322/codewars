// Sum Numbers
function sum (numbers) {
    "use strict";
    let sum = 0;
  
    if (numbers.length < 1) {
      return 0;
    } else {
      for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      
      return sum;
    }
    
};