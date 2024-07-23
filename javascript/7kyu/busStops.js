var number = function(busStops){
    let passengers = 0;
    
    for (const [passenger1, passenger2] of busStops) {
      passengers += passenger1 - passenger2;
    }
    
    return passengers
  }