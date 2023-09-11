document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen ? 'fa-light fa-xmark' : 'fa.light fa-bars'
    };

});

function redirectIndex(url) {
    window.location.href = url;
}

function redirectProjectOne(url) {
    window.location.href = url;
}

function redirectProjectTwo(url) {
    window.location.href = url;
}
