const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=54.47&lon=9.83&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    data.weather.forEach((event) => {
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}.png`;
        let desc = event.description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', `weather icon ${event.description}`);
        weatherDesc.textContent = `${desc}`;
        weatherDesc.style.textTransform = 'capitalize';
    })    
}