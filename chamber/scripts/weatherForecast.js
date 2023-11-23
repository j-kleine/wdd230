const weatherForecast = document.querySelector('#weather-forecast')
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=56.03&lon=12.59&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7'

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
    const dayOptions = {
        weekday: "short",
        // day: "numeric"
    };
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
       timeZone: "UTC"
    };

    data.list.forEach((timestamp) => {
        if (timestamp.dt_txt.includes("12:00:00")) {

            let forecastEvent = document.createElement('div');
            forecastEvent.setAttribute('id', 'forecast-event');

            let day = document.createElement('p');
            day.setAttribute('id', 'forecast-day');
            day.innerHTML = `${new Date((timestamp.dt)*1000).toLocaleDateString('en-DK', dayOptions)}`;;
            forecastEvent.appendChild(day);

            let time = document.createElement('p');
            time.setAttribute('id', 'forecast-time');
            time.innerHTML = `${new Date((timestamp.dt)*1000).toLocaleTimeString('en', timeOptions)}`;;
            forecastEvent.appendChild(time);

            let temp = document.createElement('p');
            temp.setAttribute('id', 'forecast-temp');
            temp.innerHTML = `${timestamp.main.temp.toFixed(0)}°C`;
            forecastEvent.appendChild(temp);

            timestamp.weather.forEach((event) => {
                let icon = document.createElement('img');
                icon.setAttribute('id', 'forecast-icon');
                let iconsrc = `https://openweathermap.org/img/wn/${event.icon}.png`;
                icon.setAttribute('src', iconsrc);
                icon.setAttribute('alt', `weather icon ${event.description}`);
                forecastEvent.appendChild(icon);

                let desc = document.createElement('p');
                desc.setAttribute('id', 'forecast-desc');
                desc.textContent = `${event.description}`;
                forecastEvent.appendChild(desc);
            });

            weatherForecast.appendChild(forecastEvent);
        }
    })   
}