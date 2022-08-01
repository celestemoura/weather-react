import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import "./Weather.css";

export default function CurrentWeather(props) {
  let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
  let feelsLikeFahrenheit = (props.data.feelsLike * 9) / 5 + 32;
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    setUnit("celsius");
  }

  let twoFirstRows = (
    <span>
      <div className="row">
        <div className="col current-location">
          {props.data.city}, {props.data.country}
        </div>
      </div>
      <div className="row">
        <div className="col today">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
    </span>
  );

  let weatherIconSnippet = (
    <div className="col-6">
      <span className="main-icon">
        <WeatherIcon code={props.data.icon} size={80} />
      </span>
    </div>
  );

  let skyWindHumidity = (
    <span>
      <li>{props.data.skyConditions}</li>
      <li>wind: {Math.round(props.data.windSpeed)} km/h</li>
      <li>humidity: {props.data.humidity}%</li>
    </span>
  );

  let forecastComponent = (
    <Forecast coordinates={props.data.coordinates} unit={unit} />
  );

  if (unit === "celsius") {
    return (
      //Celsius display (Fahrenheit display follows)
      <div className="CurrentWeather">
        {twoFirstRows}
        <div className="row">
          <div className="col-12 text-center">
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit-switch">
              <button className="active" title="Celsius">
                °C
              </button>
              |
              <button title="Fahrenheit" onClick={showFahrenheit}>
                °F
              </button>
            </span>
          </div>
        </div>
        <div className="row weather-details">
          {weatherIconSnippet}
          <div className="col-6">
            <ul className="conditions">
              <li>feels like {Math.round(props.data.feelsLike)}°</li>
              {skyWindHumidity}
            </ul>
          </div>
        </div>
        {forecastComponent}
      </div>
    );
  } else {
    return (
      //Fahrenheit display
      <div className="CurrentWeather">
        {twoFirstRows}
        <div className="row">
          <div className="col-12 text-center">
            <span className="current-temperature">
              {Math.round(fahrenheitTemperature)}
            </span>
            <span className="unit-switch">
              <button title="Celsius" onClick={showCelsius}>
                °C
              </button>
              |
              <button className="active" title="Fahrenheit">
                °F
              </button>
            </span>
          </div>
        </div>
        <div className="row weather-details">
          {weatherIconSnippet}
          <div className="col-6">
            <ul className="conditions">
              <li>feels like {Math.round(feelsLikeFahrenheit)}°</li>
              {skyWindHumidity}
            </ul>
          </div>
        </div>
        {forecastComponent}
      </div>
    );
  }
}
