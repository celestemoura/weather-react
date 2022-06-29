import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function CurrentWeatherInfo(props) {
  let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
  let minFahrenheitTemperature = (props.data.minTemp * 9) / 5 + 32;
  let maxFahrenheitTemperature = (props.data.maxTemp * 9) / 5 + 32;
  let feelsLikeFahrenheit = (props.data.feelsLike * 9) / 5 + 32;
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      //Celsius display (Fahrenheit display below)
      <div className="CurrentWeatherInfo">
        <div className="row">
          <div className="col current-location">
            <span>
              {props.data.city}, {props.data.country}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col today">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
            <span>
              <div className="current-temperature">
                {Math.round(props.data.temperature)}°
              </div>
              <div className="celsius-fahrenheit">
                <button className="active" title="Celsius">
                  °C
                </button>
                |
                <button title="Fahrenheit" onClick={showFahrenheit}>
                  °F
                </button>
              </div>
              <div className="main-icon">
                <WeatherIcon code={props.data.icon} />
              </div>
              <ul className="conditions">
                <li>
                  {Math.round(props.data.minTemp)}°/
                  {Math.round(props.data.maxTemp)}°
                </li>
                <li>feels like {Math.round(props.data.feelsLike)}°</li>
                <li>wind: {Math.round(props.data.windSpeed)} km/h</li>
                <li>{props.data.skyConditions}</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //Fahrenheit display
      <div className="CurrentWeatherInfo">
        <div className="row">
          <div className="col current-location">
            <span>
              {props.data.city}, {props.data.country}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col today">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
            <span>
              <div className="current-temperature">
                {Math.round(fahrenheitTemperature)}°
              </div>
              <div className="celsius-fahrenheit">
                <button title="Celsius" onClick={showCelsius}>
                  °C
                </button>
                |
                <button title="Fahrenheit" className="active">
                  °F
                </button>
              </div>
              <div className="main-icon">
                <WeatherIcon code={props.data.icon} />
              </div>
              <ul className="conditions">
                <li>
                  {Math.round(minFahrenheitTemperature)}°/
                  {Math.round(maxFahrenheitTemperature)}°
                </li>
                <li>feels like {Math.round(feelsLikeFahrenheit)}°</li>
                <li>wind: {Math.round(props.data.windSpeed)} km/h</li>
                <li>{props.data.skyConditions}</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
