import fs from "fs";


let contents = fs.readFileSync('./day1/input.txt', 'utf8');

//grab each line
const input = contents.split(/\r?\n/);
const firstAndLast = (gameSets: string) => {
    // match digits whitespace and words
    // bless the blogpost https://mtsknn.fi/blog/how-to-do-overlapping-matches-with-regular-expressions/
    const findMatch = [...gameSets.matchAll(/(?<=([0-9]|zero|one|two|three|four|five|six|seven|eight|nine))/g)].map(val => val[1])
    // |zeroone|twoone|eightwo|eighthree|
    // this will contain the digits dits
    const dictionary = {
        "zero": '0',
        "one": '1',
        "two": '2',
        "three": '3',
        "four": '4',
        "five": '5',
        "six": '6',
        "seven": '7',
        "eight": '8',
        "nine": '9',
        // "zerone": '1',
        // "twoone": '1',
        // 'eightwo': '2',
        // 'eighthree': '3',
        // 'sevenine': '9',
    }
    const firstValue = dictionary[findMatch[0]] ? dictionary[findMatch[0]] : findMatch[0]
    const secondValue = dictionary[findMatch[findMatch.length-1]] ? dictionary[findMatch[findMatch.length-1]] : findMatch[findMatch.length-1]
    const value = firstValue + secondValue
    return parseInt(value);
}

let sumOfPower = 0 
input.forEach(weather => 
      sumOfPower += firstAndLast(weather)
)


// wrong 55648 too low
console.log(sumOfPower)