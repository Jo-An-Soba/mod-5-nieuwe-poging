import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function driehoek (hoogte, breedte){
    let opp = (hoogte * breedte)/2;
    return(opp);
}

let hoogte = parseFloat(await userInput.question("hoogte?)"));
let breedte = parseFloat(await userInput.question("breedte?)"));

console.log(driehoek(hoogte, breedte));

process.exit();
