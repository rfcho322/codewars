function getCount(str) {
    let count = 0;
    const vowels = 'aeiou';
    
    for (let letter of str.toLowerCase()) {
      if(vowels.split('').includes(letter)) {
        count++;
      }
    }
    return count;
  }