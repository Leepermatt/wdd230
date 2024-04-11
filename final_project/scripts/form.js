function redirectToForm() {
    window.location.href = "https://leepermatt.github.io/wdd230/final_project/reservations.html";
}
// function closeBanner() {
//     var banner = document.querySelector('.banne');
//     banner.style.display = 'none';
// }
// You can add any dynamic behavior here if needed
// For example, form validation or handling form submission
document.getElementById("form").addEventListener("submit", function (event) {
    // Handle form submission logic (e.g., send data to a server)
    // Prevent the default form submission behavior
    event.preventDefault();
    // Redirect to submit.html
    window.location.href = "https://leepermatt.github.io/wdd230/final_project/submit.html";
});
