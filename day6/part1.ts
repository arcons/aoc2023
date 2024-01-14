import fs from "fs";



// time and distance
// Ex
// Time:      7  15   30
// Distance:  9  40  200

// const maxTime = [15,30]
// const distanceToBeat = [40,200]

//Time:        52     94     75     94
// Distance:   426   1374   1279   1216
const maxTime = [52,94,75,94]
const distanceToBeat = [426,1374,1279,1216]

// one mm/s increase per second held so its acceleration
// distance = (time-timeheldDown) * timeHeldDown
// 6 = 6*1
// 12 = (7-3)*3
// v = x
// tl = time - thd
// find solutions above threshold distance
// find max and decrease after that
// d = (t-x)*x
// d = tx-x^2
// x = sqrt(tx-d)



// plug into wolfram alpha
// 1/2 (t + sqrt(-4 d + t^2))
// const determineMaxValue = (D: number, t: number) => {
//     const discriminantTerm = t * t - 4 * D;
    
//     if (discriminantTerm < 0) {
//         // No real solutions for d
//         return [];
//     }

//     const solutions = [];

//     // Calculate the two solutions for d
//     const solution1 = (t + Math.sqrt(discriminantTerm)) / 2;
//     const solution2 = (t - Math.sqrt(discriminantTerm)) / 2;

//     // Check if each solution is greater than D
//     if (solution1 > D) {
//         solutions.push(solution1);
//     }

//     if (solution2 > D) {
//         solutions.push(solution2);
//     }

//     return solutions;
// }

// we brute force and half, start at half of floor and loop through above and below until the values match
function calculateSuccesfulValues(time: number, distance: number) {
    const testTime = Math.floor(time/2)

    // increment to max
    const winningTimes = []
    // testTime = 3
    // 7-*4 = 12
    let currentDistanceUpperHalf = (time-(testTime+1)) * (testTime+1)
    /// loop until the values decrease
    for(let i = testTime+1; currentDistanceUpperHalf >= distance ; i++) {
        // 
        currentDistanceUpperHalf = (time-i) * i
        if (currentDistanceUpperHalf > distance) {
            winningTimes.push(i)
        }
    }
    // other way
    // current distance = remaining time * button hold
    let currentDistanceLowerHalf = (time-testTime) * (testTime) 
    for(let i = testTime; currentDistanceLowerHalf >= distance ; i--) {
        // 
        currentDistanceLowerHalf = (time-i) * i
        if (currentDistanceLowerHalf > distance) {
            winningTimes.push(i)
        }
    }
    return winningTimes.length
} 

let solution = 1
maxTime.forEach((time,index) => {
    const greaterThanLosers = calculateSuccesfulValues(time, distanceToBeat[index])
    solution = solution * greaterThanLosers
})

console.log(solution)