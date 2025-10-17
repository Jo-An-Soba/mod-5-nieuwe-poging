import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*M1: Hoger/lager

We gaan beginnen met een klein spel te bouwen. 
De opzet is heel simpel: de gebruiker moet een getal tussen 1 en 10 juist raden. 
Dankzij enkele functies van Math kunnen we random getallen genereren:

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Begin door aan de gebruiker eenmalig een getal te vragen 
en zeg aan de gebruiker die het juiste getal heeft geraden of niet. 
Als de gebruiker het juiste getal niét heeft gegokt, laat dan weten of het hoger of lager moet zijn.
*/

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let uitkomstRadom = random(1, 10); // ik moet de uitkomst opslaan in een doosje om het vast te maken + function call
                            //function call NOOIT vergeten !!

let getal = parseFloat(await userInput.question("Geef een getal in: "));

while(getal != uitkomstRadom){

    if(getal < uitkomstRadom){          //getal vergelijken met vastgemaakte uitkomst
    console.log("Je moet hoeger mikken");
    getal = parseFloat(await userInput.question("Geef een getal in: "));
    }
    else if(getal > uitkomstRadom){
    console.log("Je moet lager mikken");
    getal = parseFloat(await userInput.question("Geef een getal in: "));
    }
}
console.log("SUPER! Je hebt juist geraden!");

process.exit();