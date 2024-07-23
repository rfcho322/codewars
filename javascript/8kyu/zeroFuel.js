const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const fuel = mpg * fuelLeft;
    const isFuelEnough =  distanceToPump <= fuel;
    
    return isFuelEnough;
};