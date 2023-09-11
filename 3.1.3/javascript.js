//Ändra orginallistans ordning
function update() {
    document.getElementById("one").textContent = "Sola";
    document.getElementById("two").textContent = "Resa";
    document.getElementById("three").textContent = "Bada";
}

//Hämta element id och specifiera att en funktion ska köras när knappen trycks på
var updateButton = document.getElementById("update");
updateButton.onclick = update;

//Lägg till ett element som användaren matar in
function add() {
    var newEl = document.createElement("li");
    var newText = window.prompt("Lägg till punkt:");
    newText = document.createTextNode(`${newText}`);
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);
    newEl.classList.add("summer");

    updateItemCount();
}

//Hämta element id och specifiera att en funktion ska köras när knappen trycks på
var addButton = document.getElementById("add");
addButton.onclick = add;

//Ta bort ett element genom att fråga användaren vilken och sedan matcha till ett element i listan 
function remove() {
    var input = window.prompt("Vilken vill du ta bort?");

    var listItems = document.querySelectorAll('li');
    if (listItems.length > 1) {
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent == input) {
                var itemNumber = listItems[i]
                var conEl = itemNumber.parentNode;
                itemNumber.classList.remove("summer");
                conEl.removeChild(itemNumber);
                updateItemCount();
                break;
            }
        }
    }
}

//Hämta element id och specifiera att en funktion ska köras när knappen trycks på
var removeButton = document.getElementById("remove");
removeButton.onclick = remove;

//Räkna antalet i listan och uppdatera det
function updateItemCount() {
    var itemCount = document.querySelectorAll('#list li').length;
    document.getElementById("rubrik").textContent = (`Saker du kan göra på sommaren (${itemCount})`);
}

//Återställ orginallistans ordning
function reset() {
    document.getElementById("one").textContent = "Bada";
    document.getElementById("two").textContent = "Sola";
    document.getElementById("three").textContent = "Resa";
}

//Hämta element id och specifiera att en funktion ska köras när knappen trycks på
var resetButton = document.getElementById("reset");
resetButton.onclick = reset;

//Visa alla element som tillhör klassen 'summer'
function extractInformation() {
    var elements = document.getElementsByClassName("summer");
    var content = "";

    for (var i = 0; i < elements.length; i++) {
        content += elements[i].textContent + "\n";
    }
    window.alert(content);
}

//Hämta element id och specifiera att en funktion ska köras när knappen trycks på
var extractButton = document.getElementById("extract");
extractButton.onclick = extractInformation;

//Visa musens koordinater när den är i formuläret
var box = document.getElementById("box");
var coordinates = document.getElementById("coordinates");

box.addEventListener("mouseover", function (event) {
    showCoordinates(event);
});

box.addEventListener("mouseout", function (event) {
    hideCoordinates();
});

function showCoordinates(event) {
    var x = event.pageX;
    var y = event.pageY;

    coordinates.textContent = "X: " + x + " | Y: " + y;
}

function hideCoordinates() {
    coordinates.textContent = "";
}

// Kolla vilken tangent användaren trycker ner och sedan meddela det.
var inputElement = document.getElementById("myInput");
inputElement.addEventListener("keydown", function (event) {
    var key = event.key;
    window.alert("Keydown: " + key);
});

//Ge ett meddelande när 'submit' trycks på
var formElement = document.getElementById("form");
formElement.addEventListener("submit", function () {
    window.alert("Du har skickat formuläret!")
})


//Ta bort att länken öppnas
function denyLink(event) {
    if (activateLink == true) {
        googleLink.removeEventListener;
    } else {
        event.preventDefault();
    }
}

function acceptLink() {
    activateLink = true;
    return activateLink;
}


var googleLink = document.getElementById("google");
googleLink.addEventListener("click", denyLink);

var activateLink = document.getElementById("activate");
activateLink.addEventListener("click", acceptLink);


//Ge ett meddelande om storleken på fönstret ändras
window.addEventListener("resize", function () {
    window.alert("Nu ändrade du storlek på sidan");
})


document.addEventListener("DOMContentLoaded", function () {
    updateItemCount();
});
