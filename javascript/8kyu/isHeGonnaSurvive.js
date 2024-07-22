function hero(bullets, dragons){
    if (typeof bullets === 'number' && typeof dragons === 'number') {
      return bullets >= dragons * 2;
    }
  }