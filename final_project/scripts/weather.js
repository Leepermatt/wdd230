// const lattitude = 37.70;
// const longitude = -113.09;
// const apiKey = "2f78556413725d71ca9f22d69354cba8";
// const units = 'imperial';

//20.492469234533328, -86.94941955795011

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
//const url = `https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
//const forcast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&appid=2f78556413725d71ca9f22d69354cba8`
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;


const currentTempElement = document.querySelector('#current-temp');
const humidityElement = document.querySelector('#humidity');
const weatherIconElement = document.querySelector('#weather-icon');
const descriptionElement = document.querySelector('#description');
const nextDayTempElement = document.querySelector('#next-day-temp');
const nextDayHighElement = document.querySelector('#next-day-high');
const titleElement = document.querySelector('#title');

async function fetchWeatherData() {
    try {
        // Fetch current weather data
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`);
        const currentWeatherData = await currentWeatherResponse.json();
        console.log("Current Weather Data:", currentWeatherData);
        // Fetch forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`);
        const forecastData = await forecastResponse.json();
        console.log("Forecast Data:", forecastData);
        // Current temperature and humidity
        const currentTemp = currentWeatherData.main.temp;
        const humidity = currentWeatherData.main.humidity;

        // Weather description and icon
        const weatherTitle = currentWeatherData.weather[0].main;
        const weatherDescription = currentWeatherData.weather[0].description;
        const weatherIcon = currentWeatherData.weather[0].icon;
        // Find the forecast entries for the next day at 3:00 pm
        // Get today's date

        // Display data
        currentTempElement.textContent = `${currentTemp} °F`;
        humidityElement.textContent = `${humidity}%`;
        titleElement.textContent = weatherTitle;
        descriptionElement.textContent = weatherDescription;
        weatherIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;

        //nextDayTempElement.textContent = `${nextDayTemp} °F`;
        // nextDayHighElement.textContent = `${nextDayHigh} °F`;
    } catch (error) {
        console.log(error);
    }
}
function getTodayHighestTemp(data) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date
    let highestTemp = -Infinity;
    data.list.forEach(entry => {
        const dateTime = entry.dt_txt.split(' ')[0]; // Extract date from timestamp
        if (dateTime === today && entry.main.temp_max > highestTemp) {
            highestTemp = entry.main.temp_max;
        }
    });
    //return highestTemp;
    nextDayHighElement.textContent = `${highestTemp} °F`;
}
// Function to find tomorrow's 3 PM temperature
function getTomorrow3PMTemp(data) {
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Get tomorrow's date
    const targetTime = tomorrow + ' 15:00:00'; // Tomorrow's 3 PM
    let tempAt3PM = null;
    data.list.forEach(entry => {
        if (entry.dt_txt === targetTime) {
            tempAt3PM = entry.main.temp;
        }
    });
    return tempAt3PM;
}
// Fetch weather data when the page loads
fetchWeatherData();


