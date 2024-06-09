/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '6a176359a27f037d19633a8c584ff258'; // Replace with your OpenWeatherMap API key
    const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
    const locationInput = document.getElementById('locationInput');
    const locationName = document.getElementById('locationName');
    const weatherDescription = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    fetchWeatherBtn.addEventListener('click', () => {
        const location = locationInput.value;
        if (location) {
            fetchWeather(location);
        }
    });

    function fetchWeather(location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    alert('Location not found');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    function displayWeather(data) {
        locationName.textContent = data.name;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
});
