function oddOrEven(array) { 
    const initialValue = 0;
    const sum = array.reduce((a, b) => a + b, initialValue);
    
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }