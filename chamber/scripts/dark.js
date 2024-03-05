document.addEventListener("DOMContentLoaded", function () {

    var darkModeSlider = document.getElementById('darkmode');

    darkModeSlider.addEventListener('change', function () {
        // Selecting the elements I want to change
        var elementsToChange = document.querySelectorAll('body, header, nav, main, section, footer, div, li');

        if (this.checked) {
            elementsToChange.forEach(function (element) {
                element.style.backgroundColor = 'black';
                element.style.color = 'white';
            });
        } else {
            elementsToChange.forEach(function (element) {
                element.style.backgroundColor = '';
                element.style.color = '';
            });
        }
    });
});
