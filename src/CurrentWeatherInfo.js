import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
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
              |<button title="Fahrenheit">°F</button>
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
              <li>wind: {Math.round(props.data.wind)} km/h</li>
              <li>{props.data.sky}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
