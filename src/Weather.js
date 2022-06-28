import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeatherInfo from "./CurrentWeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      sky: response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    let apiKey = "d4e08a0b9b2ea184fab7dbd303ce7427";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function findMe(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "d4e08a0b9b2ea184fab7dbd303ce7427";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    });
  }

  if (weather.ready) {
    return (
      <div>
        <div className="row Weather">
          <div className="col-8">
            <form autoComplete="off" onSubmit={handleSearch}>
              <i
                className="fa-solid fa-map-pin location-icon"
                id="location-icon"
                onClick={findMe}
              ></i>
              <input
                type="text"
                placeholder="Enter a city"
                autoFocus="yes"
                onChange={updateCity}
                className="search-field"
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </div>
          <div className="col-4 celsius-fahrenheit">
            <button id="celsius-link" className="active" title="Celsius">
              °C
            </button>
            |
            <button title="Fahrenheit" id="fahrenheit-link">
              °F
            </button>
          </div>
        </div>
        <CurrentWeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
