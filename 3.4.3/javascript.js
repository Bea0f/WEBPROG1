//Funktion för att skapa ett XMLHttpRequest
function hämtaData() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var resultat = xhr.responseText;
                document.getElementById('resultat').textContent = resultat;
            } else {
                console.log('Fel vid hämtning av data. Statuskod: ' + xhr.status);
            }
        }
    };

    var url = 'https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php';
    var number1 = 300;
    var number2 = 600;
    var fullUrl = url + '?number1=' + number1 + '&number2=' + number2;

    xhr.open('GET', fullUrl, true);
    xhr.send();
}
