const currentTemp = document.querySelector('#current-temp');
const currentIcon = document.querySelector('#current-icon');
const currentDesc = document.querySelector('#current-desc');
const currentHumid = document.querySelector('#current-humid');

// 20.5042668593973, -86.94208686973866

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.94&units=metric&appid=6973a4b17cded0bc4a99143605f5a7e7';

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

        currentIcon.setAttribute('src', iconsrc);
        currentIcon.setAttribute('alt', `weather icon ${event.description}`);
        currentDesc.textContent = `${desc}`;
        currentDesc.style.textTransform = 'capitalize';
        
    })    
    let humid = data.main.humidity;
    currentHumid.textContent = `${humid}%`;
}