const apiKey = "YOUR_API_KEY";
const lat = -21.76; // Juiz de Fora
const lon = -43.35;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    // current
    document.getElementById("temp").textContent =
        `Temperature: ${data.list[0].main.temp}°C`;

    document.getElementById("description").textContent =
        data.list[0].weather[0].description;

    // forecast (3 dias)
    const forecast = document.getElementById("forecast");

    forecast.innerHTML = `
        <p>Day 1: ${data.list[8].main.temp}°C</p>
        <p>Day 2: ${data.list[16].main.temp}°C</p>
        <p>Day 3: ${data.list[24].main.temp}°C</p>
    `;
}

getWeather();