import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*Schrijf een functie die een TV-serie aan de gebruiker gaat vragen. 
Zorg ervoor dat de return-waarde van deze functie het volgende terug geeft 
indien de TV-serie gekend is (vul natuurlijk zelf de juiste locatie in):

    Je gekozen TV-serie vindt plaats in ...

Indien de locatie niet gekend zou zijn, 
return het volgende (en vul ook hier weer de ingegeven TV serie in):

    Sorry, ik weet niet waar de serie ... zich afspeelt*/

// deze oefening later zeker nog eens from scratch !!

function serie(titel, place){
    console.log(`${titel} SPEELT zich af ${place}`);
}

let titel = await userInput.question("Geef de titel van de serie in: ");
let place;

switch(titel){
    case "The X-Files":
        place = "in Amerika";
        break;
    case "Buffy the Vampire Slayer":
        place = "in Angola";
        break;
     case "Star Trek":
        place = "in een gigantisch ruimtestation";
        break;
    case "Dexter":
        place = "in een kelder van de NASA";
        break;
    case "Freaks and Geeks":
        place = "in Michigan";
        break;
    case "ReBoot":
        place = "in een computer";
        break;
    case "Power Rangers":
        place = "op school";
        break;

    default:
        console.log("Deze TV-serie ken ik niet");
}

let antwoord = serie(titel, place); // moet dit er eigenlijk nog bij ?

/*serie("The X-Files", "in Amerika");
serie("Buffy the Vampire Slayer", "in Angola");
serie("Star Trek", "in een gigantisch ruimtestation");
serie("Dexter", "in een kelder van de NASA");
serie("Freaks and Geeks", "in Michigan");
serie("ReBoot", "in een computer");
serie("Power Rangers", "op school");*/





process.exit();