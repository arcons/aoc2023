import fs from "fs";


let contents = fs.readFileSync('./day9/test.txt', 'utf8');

//grab each line and value per
const input = contents.split(/\r?\n/).map(val => val.split(' '));

// goal is to find which games are possible
// each game is split by ' '

// check to see if any of the values after splitting contain a value bigger than whats above
// sum the ids of the games

// recursion is the easiest way
const oasis = (history: number[])=> {
    const historSum = history.reduce((a, b) => a - b, 0)
    while(historSum !== 0) {
        const nonZero = []
        for(let i=0 ; i < history.length-1; i++){
            // I think this may be broken
            nonZero.push(history[i+1] - history[i])
        }
        // return arrays rather than just the values
        const lastOasisResult = oasis(nonZero)
        history.push(lastOasisResult[0]+history[0])
        return history
    }
    // otherwise take the last value and return
    // history.push(lastValue)
    return history
}

let oasisSum = 0
input.forEach(history => {
    const numberVals = history.map(val => parseInt(val))
    const oResult = oasis(numberVals)
        oasisSum += oResult[oResult.length-1]
    // quick checkerFunction
    // 2751 too high
})

console.log(oasisSum)