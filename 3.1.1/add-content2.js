// Number, String och RegExp-variabel
var myNumber = 42;
var myString = "Detta är en sträng";
var myRegExp = /en/;

// Testa om mönstret finns i strängen
var match = myString.match(myRegExp);

// Skriv ut informationen på webbsidan
var outputElement = document.getElementById("output");
outputElement.innerHTML = "Mitt nummer är: " + myNumber + "<br>" +
    "Min sträng är: " + myString + "<br>" +
    "Matchar mönstret 'en' i strängen? " + (match !== null);
