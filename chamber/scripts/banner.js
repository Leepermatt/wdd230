// Get the current date
const currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayOfWeek = currentDate.getDay();

// Check if it's Monday, Tuesday, or Wednesday (1, 2, or 3 respectively)
const isWeekday = currentDayOfWeek >= 1 && currentDayOfWeek <= 3;

// Function to display or hide the banner based on the day of the week
function displayBanner() {
    // Get the banner element
    const banner = document.getElementById('banner');

    // If it's Monday, Tuesday, or Wednesday, display the banner; otherwise, hide it
    if (isWeekday) {
        banner.style.display = 'block';

        // Add an event listener to the close button
        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            banner.style.display = 'none';
        });
    } else {
        banner.style.display = 'none';
    }
}

// Function to close the banner when the close button is clicked
function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

// Call the displayBanner function when the page loads
window.onload = function () {
    displayBanner();

    // Add event listener to the close button
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', closeBanner);
};