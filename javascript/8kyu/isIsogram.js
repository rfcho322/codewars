function isIsogram(str){
    str = str.toLowerCase();
    let arr = str.split("").sort();
    for (let i = 0; i < str.length - 1; i++) {
      if (arr[i] == arr[i + 1])
        return false;
    }
    return true;
  }