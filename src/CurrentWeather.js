import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import "./Header.css";
import FormattedDate from "./FormattedDate";
import SearchFunction from "./SearchFunction";

export default function CurrentWeather(props) {
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      sky: response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row Header">
          <div className="col-8">
            <SearchFunction />
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
        <div className="CurrentWeather">
          <div className="row">
            <div className="col current-location">
              <span id="city-country">
                {props.defaultCity}, {props.defaultCountryCode}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col today" id="today">
              <span id="current-date">
                <FormattedDate date={weather.date} />
              </span>
              <span>
                <div className="current-temperature" id="current-temperature">
                  {Math.round(weather.temperature)}°
                </div>
                <img
                  alt="Weather Icon"
                  className="main-icon"
                  id="main-icon"
                  src={weather.iconURL}
                />
                <ul className="conditions">
                  <li id="min-max">
                    {Math.round(weather.minTemp)}°/{Math.round(weather.maxTemp)}
                    °
                  </li>
                  <li id="feels-like">
                    feels like {Math.round(weather.feelsLike)}°
                  </li>
                  <li id="wind-speed">wind: {Math.round(weather.wind)} km/h</li>
                  <li id="sky">{weather.sky}</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d4e08a0b9b2ea184fab7dbd303ce7427";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity},${props.defaultCountryCode}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading";
  }
}
