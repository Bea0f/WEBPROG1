var myArray = [2, 4, 6, 8];
var today = new Date();

//Variabler för att kolla om det regnar 
var isRaining = false;
var userInput = prompt("Regnar det? Skriv 'ja' eller 'nej'.");

//Beräkna kvadratroten ur ett tal
var number = 16;
var sqaureRoot = Math.sqrt(number);

//Sätter om isRaining till true om användaren säger att det regnar 
if (userInput == "ja") {
    isRaining = true;
}

//Printar olika meddelnaden beroende på om det regnar eller inte. 
if (isRaining) {
    alert("Ta med ett paraply!");
} else {
    alert("Det behövs nog inget paraply idag.");
}

//Printa information
let outputElement = document.getElementById("output");
outputElement.innerHTML = "Array Element 2: " + myArray[2] + "<br>" + "Dagend datum: " + today.toDateString() + "<br>" + "Kvadratroten av " + number + " är " + sqaureRoot;
