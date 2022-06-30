import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemperatureForecast() {
    let minTemperatureForecast = Math.round(props.data.temp.min);
    return `${minTemperatureForecast}°`;
  }

  function maxTemperatureForecast() {
    let maxTemperatureForecast = Math.round(props.data.temp.max);
    return `${maxTemperatureForecast}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[day];
  }

  return (
    <div>
      <div className="WeekDay">{day()}</div>
      <div className="ForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={42} />
      </div>
      <span className="MinTempForecast">{minTemperatureForecast()}</span>
      <span className="MaxTempForecast">{maxTemperatureForecast()}</span>
    </div>
  );
}
