$(document).ready(function () {
    // Visa, göm och toggle
    $('#showButton').on('click', function () {
        $('#element').show();
    });

    $('#hideButton').on('click', function () {
        $('#element').hide();
    });

    $('#toggleButton').on('click', function () {
        $('#element').toggle();
    });


    //Fade in/out/toggle/to
    $('#fadeInButton').on('click', function () {
        $('#element').fadeIn(1000);
    });

    $('#fadeOutButton').on('click', function () {
        $('#element').fadeOut(500);
    });

    $('#fadeToggleButton').on('click', function () {
        $('#element').fadeToggle();
    });


    $('#fadeToButton').on('click', function () {
        var opacValue = $('#element').css('opacity');
        if (opacValue == 1) {
            $('#element').fadeTo('slow', 0.5);
        } else {
            $('#element').fadeTo('slow', 1);
        }
    });

    function animationOver() {
        alert('Animationen är klar!');
    }

    //Animera
    $('#animateButton').on('click', function () {
        $('#element').animate({
            width: '300px',
            height: '300px',
            opacity: 0.5
        }, 2000, 'linear', function () {
            animationOver();
        });
    });
});
