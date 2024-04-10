// JavaScript to toggle visibility of navigation on click
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('nav ul');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});