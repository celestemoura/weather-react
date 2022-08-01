import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      skyConditions: response.data.weather[0].description,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      //set to ready: true
      ready: true,
    });
  }

  function search() {
    let apiKey = "d4e08a0b9b2ea184fab7dbd303ce7427";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl).then(function (response) {
      if (!response.ok) {
        alert("No matches!");
      } else {
        axios.get(apiUrl).then(displayWeather);
      }
    });
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
          <div className="col">
            <form autoComplete="off" onSubmit={handleSearch}>
              <i
                className="fa-solid fa-map-pin location-icon"
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
        </div>
        <CurrentWeather data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
