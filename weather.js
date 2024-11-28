const apiKey = "41bef1d1ddc74b3a74a8bc031d21e70d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");
const body = document.body;

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        
        const weatherMain = data.weather[0].main;

        const weatherImages = {
            Clouds: "img/clouds.png",
            Clear: "img/clear.png",
            Rain: "img/rain.png",
            Drizzle: "img/drizzle.png",
            Mist: "img/mist.png",
            Snow: "img/snow.png",
            Thunderstorm: "img/thunderstorm.png",
        };
        
        if (weatherImages[weatherMain]) {
            weatherIcon.src = weatherImages[weatherMain];
        }

        const weatherBackgrounds = {
            Clouds: "#aec6cf", // Light blue for cloudy skies
            Clear: "#f9d71c", // Sunny yellow
            Rain: "#005f73", // Rainy gray-blue
            Drizzle: "#7f8c8d", // Soft gray
            Mist: "#dcdcdc", // Foggy white-gray
            Snow: "#ffffff", // Pure white
            Thunderstorm: "#4b5d67", // Dark stormy
        };

        if (weatherBackgrounds[weatherMain]) {
        card.style.background = weatherBackgrounds[weatherMain];
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
