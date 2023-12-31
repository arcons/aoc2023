import fs from "fs";


let contents = fs.readFileSync('./day2/input.txt', 'utf8');

//grab each line
const input = contents.split(/\r?\n/);


// goal is to find which games are possible
// each game is split by ;

// check to see if any of the values after splitting contain a value bigger than whats above
// sum the ids of the games

const gamePower = (gameSets: string) => {
    // match digits whitespace and words
    const findMatch = gameSets.match(/(\d+)\s+(\w+)/g)
    // this will contain the digits and their colors

    const colorMapMaxes = {
        'red': 0,
        'green' : 0,
        'blue' : 0
    }

    for (let marbles of findMatch) {
        const [count ,color]= marbles.split(' ')
        colorMapMaxes[color] = Math.max(colorMapMaxes[color], parseInt(count))
    }
    let power = 1
    Object.values(colorMapMaxes).forEach(
        val => {
            power = power * val
        }
    )
    return power;
}

let sumOfPower = 0 
input.forEach(game => {
    const currentGame =  game.split(':')
    const gameId = parseInt(currentGame[0].split(' ')[1])
      sumOfPower += gamePower(currentGame[1])
    }
)

console.log(sumOfPower)