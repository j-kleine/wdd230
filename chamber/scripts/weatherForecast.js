const day1 = document.querySelector('#forecast-day1');
const icon1 = document.querySelector('#forecast-icon1');
const high1 = document.querySelector('#forecast-high1');
const low1 = document.querySelector('#forecast-low1');
const desc1 = document.querySelector('#forecast-desc1');

const day2 = document.querySelector('#forecast-day2');
const icon2 = document.querySelector('#forecast-icon2');
const high2 = document.querySelector('#forecast-high2');
const low2 = document.querySelector('#forecast-low2');
const desc2 = document.querySelector('#forecast-desc2');

const day3 = document.querySelector('#forecast-day3');
const icon3 = document.querySelector('#forecast-icon3');
const high3 = document.querySelector('#forecast-high3');
const low3 = document.querySelector('#forecast-low3');
const desc3 = document.querySelector('#forecast-desc3');

// 56.030983691299966, 12.591925095217084

const forecastURL = 'https://api.openweathermap.org/data/2.5/weather?lat=56.03&lon=12.59&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7';

async function apiFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayForecast(data) {
    day1.innerHTML = `${data.name}`
    high1.innerHTML = `${data.main.temp_max.toFixed(0)}`;
    low1.innerHTML = `${data.main.temp_min.toFixed(0)}`;
    data.weather.forEach((event) => {
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}.png`;
        let desc = event.description;

        icon1.setAttribute('src', iconsrc);
        icon1.setAttribute('alt', `weather icon ${event.description}`);
        desc1.textContent = `${desc}`;
    })    
}