import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*E3: Temperatuurconverter

Schrijf een functie dat een temperatuur van Farenheit naar Celcius kan omzetten 
of omgekeerd van Celcius naar Fahrenheit. 
Deze functie zal twee parameters aanvaarden: temperatuur en isCelcius (dat true of false kan zijn). 
Zorg ervoor dat deze functie de waarde zal terugsturen en zelf geen output heeft.*/

// nu opnieuw met Celcius is true ?


let hoeWarm = parseFloat(await userInput.question("Hoeveel graden? "));
let CelOfFahr = await userInput.question("Welke graden: Celcius of Fahrenheit? ");

if(CelOfFahr == "Celcius"){
function vanCelNaarFarh(hoeWarm, conversCel = 9.5){
    let warmInFahr = hoeWarm * conversCel;
    return(warmInFahr)
}
console.log(vanCelNaarFarh(hoeWarm));
}

else if(CelOfFahr == "Fahrenheit"){
function vanFahrnNaarCel(hoeWarm, conversFahr = 9.5){
    let warmInCel = hoeWarm / conversFahr;
    return(warmInCel)
}
console.log(vanFahrnNaarCel(hoeWarm));
}



process.exit();