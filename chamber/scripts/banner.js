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
    } else {
        banner.style.display = 'none';
    }
}

// Call the displayBanner function when the page loads
window.onload = displayBanner;