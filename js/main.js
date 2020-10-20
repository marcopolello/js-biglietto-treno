/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65 */

// VARIABILI, INPUT USER
var euro = 0.21;
var costoViaggio;
var km = parseInt(prompt("scrivi il numero di km che vuoi percorrere"));
var eta = parseInt(prompt("scrivi la tua età"));
console.log(km,eta);

//PREZZO DEL BIGLIETTO A SECONDA DEI KM
costoViaggio = euro * km;
console.log(costoViaggio);


// PREZZO TOTALE DEL VIAGGIO, OUTPUT
