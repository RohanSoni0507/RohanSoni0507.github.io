const apiKey = '0f68afc3cd712ad9066d6bba9d644dc8';

document.getElementById('searchButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const locationName = data.name;
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;
            
            document.getElementById('locationName').textContent = locationName;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('weatherDescription').textContent = `Weather: ${weatherDescription}`;
            document.getElementById('weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherDescription}">`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
