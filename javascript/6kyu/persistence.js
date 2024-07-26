function persistence(num) {
  
    let count = 0;
    
    while (num >= 10) {
      const digits = Array.from(num.toString()).map(Number);
      
      num = digits.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
      count++;
    }
    
    return count;
  }