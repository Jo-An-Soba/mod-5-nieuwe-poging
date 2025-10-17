import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


//Schrijf een eenvoudige functie die 2 getallen bij elkaar gaat optellen. 




function optellen(getal1, getal2){
    som = getal1  + getal2;
    console.log(som);
}

optellen(5, 6);

process.exit();