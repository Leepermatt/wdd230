document.addEventListener('DOMContentLoaded', () => {
    const currentTempElement = document.querySelector('#current-temp');
    const humidityElement = document.querySelector('#humidity');
    const weatherIconElement = document.querySelector('#weather-icon');
    const descriptionElement = document.querySelector('#description');
    const nextDayTempElement = document.querySelector('#next-day-temp-at3');
    const highTempElement = document.querySelector('#highest-temp');
    const titleElement = document.querySelector('#title');

    async function fetchWeatherData() {
        try {
            // Fetch current weather data
            const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=-86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`);
            const currentWeatherData = await currentWeatherResponse.json();

            // Fetch forecast data
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=-86.94&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`);
            const forecastData = await forecastResponse.json();

            // Display current weather data
            displayCurrentWeather(currentWeatherData);

            // Display tomorrow's 3 PM temperature
            const tomorrow3PMTemp = getTomorrow3PMTemp(forecastData);
            nextDayTempElement.textContent = `${tomorrow3PMTemp} °F`;

        } catch (error) {
            console.log(error);
        }
    }

    function displayCurrentWeather(currentWeatherData) {
        const currentTemp = currentWeatherData.main.temp;
        const humidity = currentWeatherData.main.humidity;
        const weatherTitle = currentWeatherData.weather[0].main;
        const weatherDescription = currentWeatherData.weather[0].description;
        const weatherIcon = currentWeatherData.weather[0].icon;
        const highTempToday = currentWeatherData.main.temp_max;

        currentTempElement.textContent = `${currentTemp} °F`;
        humidityElement.textContent = `${humidity}%`;
        titleElement.textContent = weatherTitle;
        descriptionElement.textContent = weatherDescription;
        weatherIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
        highTempElement.textContent = `${highTempToday} °F`
    }

    function getTomorrow3PMTemp(data) {
        const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Get tomorrow's date
        const targetTime = tomorrow + ' 15:00:00'; // Tomorrow's 3 PM
        let tempAt3PM = null;
        data.list.forEach(entry => {
            if (entry.dt_txt === targetTime) {
                tempAt3PM = entry.main.temp;
                //nextDayTempElement.textContent = `${tempAt3PM} °F`;
            }
        });
        console.log("Temperature at 3 PM Tomorrow:", tempAt3PM);
        //nextDayTempElement.textContent = `${tempAt3PM}°F`;
        return tempAt3PM;
    }

    fetchWeatherData();
});
