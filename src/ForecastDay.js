import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemperatureForecastCelsius() {
    let minTemperatureForecastCelsius = Math.round(props.data.temp.min);
    return `${minTemperatureForecastCelsius}°`;
  }

  function maxTemperatureForecastCelsius() {
    let maxTemperatureForecastCelsius = Math.round(props.data.temp.max);
    return `${maxTemperatureForecastCelsius}°`;
  }

  function minTemperatureForecastFahrenheit() {
    let minTemperatureForecastFahrenheit = Math.round(
      (props.data.temp.min * 9) / 5 + 32
    );
    return `${minTemperatureForecastFahrenheit}°`;
  }

  function maxTemperatureForecastFahrenheit() {
    let maxTemperatureForecastFahrenheit = Math.round(
      (props.data.temp.max * 9) / 5 + 32
    );
    return `${maxTemperatureForecastFahrenheit}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[day];
  }

  if (props.unit === "celsius") {
    return (
      <div>
        <div className="WeekDay">{day()}</div>
        <div className="ForecastIcon">
          <WeatherIcon code={props.data.weather[0].icon} size={42} />
        </div>
        <span className="MinTempForecast">
          {minTemperatureForecastCelsius()}
        </span>
        <span className="MaxTempForecast">
          {maxTemperatureForecastCelsius()}
        </span>
      </div>
    );
  } else {
    //if  (props.unit === "fahrenheit")
    return (
      <div>
        <div className="WeekDay">{day()}</div>
        <div className="ForecastIcon">
          <WeatherIcon code={props.data.weather[0].icon} size={42} />
        </div>
        <span className="MinTempForecast">
          {minTemperatureForecastFahrenheit()}
        </span>
        <span className="MaxTempForecast">
          {maxTemperatureForecastFahrenheit()}
        </span>
      </div>
    );
  }
}
