import React, { useState } from "react";
import axios from "axios";

export default function SearchFunction() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "d4e08a0b9b2ea184fab7dbd303ce7427";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form autoComplete="off" onSubmit={handleSearch}>
      <i className="fa-solid fa-map-pin location-icon" id="location-icon"></i>
      <input
        type="text"
        placeholder="Enter a city"
        autoFocus="yes"
        onChange={updateCity}
        className="search-field"
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );
  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.windSpeed)} km/h</li>
          <li>
            <img src={weather.iconUrl} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
