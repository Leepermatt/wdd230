const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const temp1 = document.querySelector('#future-temp1');
const temp2 = document.querySelector('#future-temp2');
const temp3 = document.querySelector('#future-temp3');

const lattitude = 37.70;
const longitude = -113.09;
const apiKey = "2f78556413725d71ca9f22d69354cba8";
const units = 'imperial';
// 37.70210231197205, -113.0985970075256

///const url = `https://api.openweathermap.org/data/2.5/weather?lat=36.26&lon=-115.26&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=37.70&lon=113.09&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
//const forcast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&appid=2f78556413725d71ca9f22d69354cba8`
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);  ///testing
            displayResults(data); // real code after testing
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
function displayResults(data) {
    currentTemp.innerHTML = `${data.list.temp}&deg;F`;
    //const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconSrc = `https://openweathermap.org/img/w/${data.list.weather[3].icon}.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function formatDayOfWeek(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Define an array of day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the day of the week from the date object and use it as an index to retrieve the day name from the array
    const dayOfWeek = days[date.getDay()];

    // Return the day of the week
    return dayOfWeek;
}

apiFetch();
