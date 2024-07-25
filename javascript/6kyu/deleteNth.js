function deleteNth(arr,n){
    const newList = []
    const count = {};
    
    const motif = arr.filter((list) => {
      if(!count[list]) {
        count[list] = 0;
      }
      
      if(count[list] < n) {
        newList.push(list);
        count[list]++;
        return true;
      }
      
      return false;
    });
    
    return motif;
  }