var newTab;
var myTimeout;
var clicked = false;

//Visa ett meddelande
window.alert('Välkommen till min sida!');

//Bekräfta en handling 
var confirmed = window.confirm('Vill du fortsätta?');
if (confirmed) {
    window.alert('Du har bekräftat');
} else {
    window.alert('Du har avbrytit, var god stäng ner sidan');
}

//Mata in text.
var name = window.prompt('Vad heter du?');
window.alert(`Hej ${name}!`);


//Öppna en ny flik
function openNewTab() {
    newTab = window.open('https://www.google.se/');
    //Stäng fliken efter 5 sekunder
    setTimeout(() => {
        newTab.close();
    }, 5000);

}

document.getElementById("openTab").onclick = openNewTab;


//Upprepar en funktion med hjälp av intervaller
var intervalId = setInterval(() => {
    window.alert('Hej detta är en intervall!');
}, 5000);


//Avbryt intervallen efter 10 sekunder och printa ett meddelande
setTimeout(() => {
    clearInterval(intervalId);
    window.alert('Intervallen är slut!')
}, 10000);

function stopButton() {
    clicked = true;
}

function showMessage() {
    if (clicked !== true) {
        document.getElementById("msg1").innerHTML = "Åh nej, du tryckte inte på stop i tid";
    } else {
        document.getElementById("stopped").innerHTML = "Du stoppade meddelandet i tid";
    }
}

myTimeout = setTimeout(showMessage, 3000);
