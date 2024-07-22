function disemvowel(str) {
    const vowels = 'aeiou'
    return str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
  }