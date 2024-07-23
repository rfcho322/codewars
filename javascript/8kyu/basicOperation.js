function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
          return value1 + value2;
        case '-':
          return value1 - value2;
        case '*':
          return value1 * value2;
        case '/':
          if (value1 === 0 || value2 === 0) {
            return 'Result is undefined'
          } if (value1 > 1 && value2 === 0) {
            return 'Cannot be divided by zero'
          }
          return value1 / value2;
        default: 
          return 'Error: Invalid Arithmetic Operation'
    }
  }