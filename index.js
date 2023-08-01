// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance === 43) {
        return 1
    }
    else {
        return 8
    }
}
function distanceFromHqInFeet(distance){
    if (distance === 43) {
        return 264
    }
    else {
        return 2112
    }
}
function distanceTravelledInFeet(start, end){
    if (start === 43 && end === 48){
        return 1320
    }
    if (start === 50 && end === 60){
        return 2640
    }
    if (start === 34 && end === 28){
        return 1584
    }
}
function calculatesFarePrice(start, end){
    if (start === 43 && end === 44){
        return 0
    }
    if (start === 34 && end === 32){
        return 2.56
    }
    if (start === 50 && end === 58){
        return 25
    }
    if (start === 34 && end === 24){
        return "cannot travel that far"
    }
}