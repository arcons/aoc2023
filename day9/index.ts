import fs from "fs";


let contents = fs.readFileSync('./day6/input.txt', 'utf8');

//grab each line and value per
const input = contents.split(/\r?\n/).map(val => val.split(' '));

// goal is to find which games are possible
// each game is split by ' '

// check to see if any of the values after splitting contain a value bigger than whats above
// sum the ids of the games

// recursion is the easiest way
const oasis = (history: number[]) => {
    const historSum= history.reduce((a, b) => a + b, 0)
    return historSum
}

let oasisSum = 0
input.forEach(history => {
    const numberVals = history.map(val => parseInt(val))
    oasisSum += oasis(numberVals)
    // quick checkerFunction
    // 2751 too high
})

console.log(oasisSum)