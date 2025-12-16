const API_KEY = "e8c160c59d8b576b64bd6d383f4a7642";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
let button = document.getElementById("fetch-button");
let weather_container = document.getElementById("weather-info");

async function fetchData() {
  let searchValue = document.getElementById("country-input").value;

  searchValue = searchValue.toLowerCase().trim();
  if (searchValue === "") {
    weather_container.innerHTML = "";
    return;
  }
  const url = `${API_URL}?q=${encodeURIComponent(
    searchValue
  )}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const weather = await response.json();
    if (weather.cod === 200) {
      displayWeather(weather);
    } else {
      weather_container.textContent =
        "Invalid search, please try with another city.";
    }
  } catch (error) {
    weather_container.textContent = "Something went wrong.";
    console.error(error);
  }
}

const displayWeather = (weather) => {
  weather_container.innerHTML = " ";
  const cityName = weather.name;
  const country = weather.sys.country;
  const temperature = Math.round(weather.main.temp);
  const tempMin = Math.round(weather.main.temp_min);  
  const tempMax = Math.round(weather.main.temp_max);
  const wind = weather.wind.speed;
  const humidity = weather.main.humidity;
  const description = weather.weather[0].description;
  const iconCode = weather.weather[0].icon;

  weather_container.innerHTML = `
    <h2>${cityName}, ${country}</h2>
    <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">
    <p class="temperature">Temperature: ${temperature}°C</p>
    <p>Max-temperature: ${tempMax}°C, Min-temperature: ${tempMin}°C</p>
    <p>Wind Speed: ${wind}m/s</p>
    <p>Weather: ${description}</p>
    <p>Humidity: ${humidity}%</p>
  `;

};

button.addEventListener("click", fetchData);
document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetch-button");
  const countryInput = document.getElementById("country-input");
  const countryInfoDiv = document.getElementById("country-info");

  fetchButton.addEventListener("click", () => {
    const countryName = countryInput.value.trim();
    if (!countryName) {
      alert("Please enter a country name.");
      return;
    }
    fetchCountryInfo(countryName).then(displayCountryInfo).catch(handleError);
  });

  const fetchCountryInfo = async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) throw new Error("Country not found");
    return await response.json();
  };

  const displayCountryInfo = (data) => {
    const country = data[0];
    countryInfoDiv.innerHTML = `
          <h2>${country.name.common}</h2>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="150"/>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital[0]}</p>
      `;
    countryInfoDiv.style.display = "block";
    saveToLocalStorage(country.name.common);
  };

  const handleError = (error) => {
    console.error("Error fetching data:", error);
    alert(error.message);
  };

  const saveToLocalStorage = (country) => {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    if (!searches.includes(country)) {
      searches.push(country);
      localStorage.setItem("searches", JSON.stringify(searches));
    }
  };
});
