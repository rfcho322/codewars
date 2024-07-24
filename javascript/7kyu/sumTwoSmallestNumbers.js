function sumTwoSmallestNumbers(numbers) {  
    const sortNumAsc = numbers.sort((a, b) => a - b);
    const firstNum = sortNumAsc[0];
    const secondNum = sortNumAsc[1];
    
    return firstNum + secondNum;
  }