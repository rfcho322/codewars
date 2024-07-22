function abbrevName(name){
    
    const splitName = name.split(' ');
    const initials = splitName[0][0].toUpperCase() + '.' + splitName[1][0].toUpperCase();
  
    return initials;

}