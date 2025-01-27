document.getElementById("get-weather").addEventListener("click", function() {
    let location = document.getElementById("location").value;
    if (!location) {
        alert("Please enter a location!");
        return;
    }

    const apiKey = "0d155e7f818d4612bc3101210252701";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found. Please try again.");
                return;
            }
            document.getElementById("location-name").textContent = `Location: ${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
            document.getElementById("aqi").textContent = `Air Quality Index: ${data.current.air_quality.pm2_5}`;
            
            document.getElementById("weather-info").style.display = "block";
        })
        .catch(err => {
            alert("Error fetching weather data. Please try again later.");
            console.error(err);
        });
});
