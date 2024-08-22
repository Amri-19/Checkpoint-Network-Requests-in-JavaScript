
document.getElementById('get-weather-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`${apiBaseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        displayWeather(data);
    } catch (error) {
        alert('Failed to fetch weather data. Please try again later.');
    }
}

function displayWeather(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
}
