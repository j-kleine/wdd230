const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#forecast-icon');

let counter = 0;

// 20.5042668593973, -86.94208686973866

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.94&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7'

async function apiFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecastWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecastWeather(data) {
    data.list.forEach((timestamp) => {
        if (timestamp.dt_txt.includes("15:00:00") && counter < 1) {
            let roundedTemp = timestamp.main.temp.toFixed(0);
            if (roundedTemp == -0) {
                roundedTemp = 0;
            }
            forecastTemp.innerHTML = `${roundedTemp}&deg;C`;
            console.log(roundedTemp);

            timestamp.weather.forEach((event) => {
                let iconsrc = `https://openweathermap.org/img/wn/${event.icon}@2x.png`;
                forecastIcon.setAttribute('src', iconsrc);
                forecastIcon.setAttribute('alt', `weather icon ${event.main} - ${event.description}`);
        });

        counter++;
        }
})}

apiFetch();