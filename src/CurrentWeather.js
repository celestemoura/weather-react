import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    currentTemperature: "18°",
    date: "Fri 16:16",
    feelsLike: "8°",
    minMax: "16°/20°",
    sky: "few clouds",
    wind: "32 km/h",
  };
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col current-location">
          <span id="city-country">Berlin, DE</span>
        </div>
      </div>
      <div className="row">
        <div className="col today" id="today">
          <span id="current-date">{weatherData.date}</span>
          <span>
            <div className="current-temperature" id="current-temperature">
              {weatherData.currentTemperature}
            </div>
            <img
              alt="Weather Icon"
              className="main-icon"
              id="main-icon"
              src="https://openweathermap.org/img/wn/02d@2x.png"
            />
            <ul className="conditions">
              <li id="min-max">{weatherData.minMax}</li>
              <li id="feels-like">feels like {weatherData.feelsLike}</li>
              <li id="wind-speed">wind: {weatherData.wind}</li>
              <li id="sky">{weatherData.sky}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
