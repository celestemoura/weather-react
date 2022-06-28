import React from "react";
import FormattedDate from "./FormattedDate";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="row">
        <div className="col current-location">
          <span id="city-country">
            {props.data.city}, {props.data.country}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col today" id="today">
          <span id="current-date">
            <FormattedDate date={props.data.date} />
          </span>
          <span>
            <div className="current-temperature" id="current-temperature">
              {Math.round(props.data.temperature)}°
            </div>
            <img
              alt="Weather Icon"
              className="main-icon"
              id="main-icon"
              src={props.data.iconURL}
            />
            <ul className="conditions">
              <li id="min-max">
                {Math.round(props.data.minTemp)}°/
                {Math.round(props.data.maxTemp)}°
              </li>
              <li id="feels-like">
                feels like {Math.round(props.data.feelsLike)}°
              </li>
              <li id="wind-speed">wind: {Math.round(props.data.wind)} km/h</li>
              <li id="sky">{props.data.sky}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
