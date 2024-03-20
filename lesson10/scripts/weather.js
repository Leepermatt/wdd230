const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lattitude = '49.75';
const longitude = '6.64';
const apiKey = '2f78556413725d71ca9f22d69354cba8'
const units = 'imperial';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2f78556413725d71ca9f22d69354cba8`
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


