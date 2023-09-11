$(document).ready(function() {
  // Visa, göm och toggle
  $("#showButton").click(function() {
    $("#element").show();
  });

  $("#hideButton").click(function() {
    $("#element").hide();
  });

  $("#toggleButton").click(function() {
    $("#element").toggle();
  });

  // Fada in, fada ut och fade toggle
  $("#fadeInButton").click(function() {
    $("#element").fadeIn();
  });

  $("#fadeOutButton").click(function() {
    $("#element").fadeOut();
  });

  $("#fadeToggleButton").click(function() {
    $("#element").fadeToggle();
  });

  // Fada till en specificerad opacitet
  $("#fadeToButton").click(function() {
    $("#element").fadeTo("slow", 0.5);
  });

  // Animering med stilsättning
  $("#animateButton").click(function() {
    $("#element").animate({
      width: "200px",
      height: "200px",
      opacity: 0.5
    }, 1000, "swing", function() {
      // Callback-funktion som körs efter animationen är klar
      alert("Animationen är klar!");
    });
  });
});
