// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {return (42 - someValue)}
    else {return (someValue - 42)};

}
function distanceFromHqInFeet(feet) {
    return Math.abs(distanceFromHqInBlocks(feet) * 264);
}
function  distanceTravelledInFeet(start, destination) {
   const distanceInBlocks = Math.abs(destination - start); 
   const distanceInFeet = distanceInBlocks * 264;
   return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if(distanceInFeet <= 400) {
        fare = 0
    }
    else if (distanceInFeet <= 2000) {
        fare = (distanceInFeet -400) * 0.02;}
    else if (distanceInFeet <= 2500) {
        fare = 25;
    }else {
        return 'cannot travel that far'
    }
    return fare;
    
}

