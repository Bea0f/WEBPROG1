<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $namn = $_POST['namn'];
  $email = $_POST['email'];
  $meddelande = $_POST['meddelande'];

  $mottagare = 'din-email@exempel.com';
  $ämne = 'Nytt meddelande från kontaktformuläret';
  $meddelandeText = "Namn: $namn\nE-post: $email\nMeddelande: $meddelande";

  // Skicka e-post
  mail($mottagare, $ämne, $meddelandeText);

  // Vidarebefordra användaren till en tack-sida
  header('Location: tack-sida.html');
  exit;
}
?>
