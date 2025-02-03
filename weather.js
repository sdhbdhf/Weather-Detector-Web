
function updateHeading(newHeading) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = newHeading;
}

function getWeather(lat, lon) {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const place = data.name; 

            // Determine the emoji based on the temperature
            if (temperature <= 0) {
                updateHeading(`🥶<br>Currently ${temperature}° in ${place}`);
            } else if (temperature > 30) {
                updateHeading(`🥵<br>Currently ${temperature}° in ${place}`);
            } else if (temperature > 0 && temperature <= 30) {
                updateHeading(`😎<br>Currently ${temperature}° in ${place}`);
            }
        })
        .catch(error => {
            alert("Error fetching weather data.");
            console.error(error);
        });
}
function changer() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            getWeather(lat, lon);
        }, () => {
            alert("Geolocation is not supported or permission denied.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

let buttonClick = document.querySelector("button");
buttonClick.addEventListener("click", changer);







