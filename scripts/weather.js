const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lattitude = '36.26';
const longitude = '-115.26';
const apiKey = '2f78556413725d71ca9f22d69354cba8'
const units = 'imperial';
// 549857696055, -115.26504908390436

const url = `https://api.openweathermap.org/data/2.5/weather?lat=36.26&lon=-115.26&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);  ///testing
            displayResults(data); // real code after testing
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    //const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}



apiFetch();
