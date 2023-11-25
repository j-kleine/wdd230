const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

// 56.030983691299966, 12.591925095217084

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=56.03&lon=12.59&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7';

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
    let roundedTemp = data.main.temp.toFixed(0);
    if (roundedTemp == -0) {
        roundedTemp = 0;
    }
    currentTemp.innerHTML = `${roundedTemp}&deg;C`;
    data.weather.forEach((event) => {
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}@2x.png`;
        let desc = event.description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', `weather icon ${event.description}`);
        weatherDesc.textContent = `${desc}`;
        weatherDesc.style.textTransform = 'capitalize';
    })    
}