import fs from "fs";


let contents = fs.readFileSync('./day1/input.txt', 'utf8');

//grab each line
const input = contents.split(/\r?\n/);
const firstAndLast = (gameSets: string) => {
    // match digits whitespace and words
    const findMatch = gameSets.match(/[0-9]/g)
    // this will contain the digits dits
    const value = findMatch[0] + findMatch[findMatch.length-1]
    return parseInt(value);
}

let sumOfPower = 0 
input.forEach(weather => 
      sumOfPower += firstAndLast(weather)
)

console.log(sumOfPower)