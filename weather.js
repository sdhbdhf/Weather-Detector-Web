// Function to update the heading with new weather information
function updateHeading(newHeading) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = newHeading;
}

// Function to get weather based on geolocation
function getWeather(lat, lon) {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    // Fetch weather data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description; // Weather condition (e.g., clear sky)
            const place = `${data.name}, ${data.sys.country}`; // City and country
            const weatherIcon = data.weather[0].icon; // Icon for the weather

            // Add emoji and message based on temperature
            let emoji = '';
            if (temperature <= 0) {
                emoji = "🥶";
            } else if (temperature > 30) {
                emoji = "🥵";
            } else if (temperature > 0 && temperature <= 30) {
                emoji = "😎";
            }

            // Update heading with weather information
            updateHeading(`
                ${emoji}<br>Currently ${temperature}°C in ${place}<br>
                Weather: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}<br>
                <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="weather icon" />
            `);
        })
        .catch(error => {
            alert("Error fetching weather data.");
            console.error(error);
        });
}

// Function to get the user's location and fetch weather data
function changer() {
    if (navigator.geolocation) {
        // Get the current location
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Call the weather API with the user's location
            getWeather(lat, lon);
        }, () => {
            alert("Geolocation permission denied or not supported.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Add event listener to the button
let buttonClick = document.querySelector("button");
buttonClick.addEventListener("click", changer);
