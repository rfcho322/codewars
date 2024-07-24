function minMax(arr){
  
    let outputArr = []
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    outputArr.push(min, max)
    
    return outputArr;
  }