// Array med bild-URL:er för bildbyte
var imageUrls = [
  "dallas.jpg",
  "solbrillor.jpg",
  "hund.jpg"
];

//Index för aktuell bild
var currentIndex = 0;
//Referens till bilden
var $image = $("img");
//flagga för att kolla om bilden är bytt
var imageChanged = false;


//Funktion för att byta bild med angivet index
function changeImage(index) {
    //Kolla så att index är inom intervallet av arrayen
    if (index >= 0 && index < imageUrls.length) {
        //Byt ut bilden
        $image.attr("src", imageUrls[index]);
        //Uppdatera aktuellt index
        currentIndex = index;
    }
}


//Funktion för tidsintervall
function timedImageChange() {
    //Öka index med 1
    currentIndex++;
    //Kolla index
    checkIndex();
    //Byt bilden 
    changeImage(currentIndex);
    //Återställ flaggan för musen
    imageChanged = false;
}

//Starta intevallen
var timer = setInterval(timedImageChange, 2000);

//Funktion för muspekare över bild
function over() {
    //Kolla om bilden redan bytts ut.
    if (!imageChanged) {
        //Stoppa tidsintervall
        clearInterval(timer);
        //Öka index med 1
        currentIndex++;
        //Kolla index
        checkIndex();
        //Byt bilden
        changeImage(currentIndex);
        //Sätt till true
        imageChanged = true;
    }
}

//Funktion för nät muspekare lämnar bild 
function out() {
    // Starta timer igen
    timer = setInterval(timedImageChange, 2000);

}

function checkIndex() {
    //om index går över antalet bilder återgå till start
    if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
    }
}

//Händelselyssnare för muspekaren
$image.hover(over, out);

//Händelselyssnare för när muspekaren lämnar bilden
//$image.on("mouseleave", out);
