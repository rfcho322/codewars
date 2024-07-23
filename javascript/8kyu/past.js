function past(h, m, s){
    h = h * 3600;
    m = m * 60;
    
    return (h + m + s) * 1000;
  }