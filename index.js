// Code your solution in this file!
function distanceFromHqInBlocks (distance){
    
    if (distance > 42) {
        return distance - 42
    } else {
        return 42 - distance
    }
}
function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet (start, end){
    if (end > start) {
        return ((end - start) * 264)
    } else {
        return ((start - end) * 264)
        
    }
}
/*
}
function distanceTravelledInFeet (start, end){
    if (end > start) {
        return distanceFromHqInFeet (end - start)
    } else {
        return distanceFromHqInFeet (start - end)
        
    }
}
*/

function calculatesFarePrice(start, end) {

    const distanceInFeet = distanceTravelledInFeet(start, end)

    if (distanceInFeet <= 400) {
        return 0
    } else
    if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * .02
    }
    if (distanceInFeet >= 2000 && distanceInFeet < 2500) {
        return 25
    }
    if (distanceInFeet >= 2500){
        return 'cannot travel that far'
    }
}
    
     




    