const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
const hereWeGo = batteryBatches.reduce(function(prev, next) {
    return prev+next;
}, 0);
// Code your solution here
