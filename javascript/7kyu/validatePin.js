function validatePIN (pin) {
    if (typeof pin === 'string' && (pin.length === 4 || pin.length === 6)) {
      for (let i = 0; i < pin.length; i++) {
        if(pin[i] < '0' || pin[i] > '9') {
          return false;
        }
      }
      return true
    }
    return false
  
  }