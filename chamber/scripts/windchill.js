var temperature = document.querySelector("#temp-var").innerHTML; // in °C
var windspeed = document.querySelector("#speed-var").innerHTML; // in km/h

var windchill = 13.12 + 0.6215 * temperature - 11.37 * windspeed ** 0.16 + 0.3965 * temperature * windspeed ** 0.16;

if (temperature > 10 || windspeed <= 4.8) {
    document.querySelector("#chill-var").innerHTML = 'N/A';
} else {
    document.querySelector("#chill-var").innerHTML = windchill.toFixed(1);
}
