import fs from "fs";


let contents = fs.readFileSync('./day2/input.txt', 'utf8');

//grab each line
const input = contents.split(/\r?\n/);

const colorMapMaxes = {
    'red': 12,
    'green' : 13,
    'blue' : 14
}

// goal is to find which games are possible
// each game is split by ;

// check to see if any of the values after splitting contain a value bigger than whats above
// sum the ids of the games

let sumOfIllegal = 0
const illegalGameCheck = (gameSets: string) => {
    // match digits whitespace and words
    const findMatch = gameSets.match(/(\d+)\s+(\w+)/g)
    // this will contain the digits and their colors
    for (let marbles of findMatch) {
        const [count ,color]= marbles.split(' ')
        if(colorMapMaxes[color] < parseInt(count))
        return false
    }
    return true
}

input.forEach(game => {
    const currentGame =  game.split(':')
    const gameId = parseInt(currentGame[0].split(' ')[1])
    if(illegalGameCheck(currentGame[1])) {
      sumOfIllegal += gameId
      console.log("illegal id ", gameId)
    }
    // quick checkerFunction
    // 2751 too high
})

console.log(sumOfIllegal)