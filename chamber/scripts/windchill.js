const temperatureElement = document.querySelector('#temperature');
const windSpeedElement = document.querySelector('#wind-speed');

// Extract temperature and wind speed values from the elements and convert them to numbers
const temperature = parseFloat(temperatureElement.textContent.trim());
const windSpeed = parseFloat(windSpeedElement.textContent.trim());

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + "°F";
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);

const weatherSection = document.querySelector('.weather');
const windChillElement = document.createElement('p');
windChillElement.textContent = "Wind Chill: " + windChill;
weatherSection.appendChild(windChillElement);
