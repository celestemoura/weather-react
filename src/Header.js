import React, { useState } from "react";
import "./Header.css";
import SearchFunction from "./SearchFunction";

export default function Header() {
  return (
    <div className="row">
      <div className="col-8">
        {/* <form autoComplete="off"> */}
        {/* <i
            className="fa-solid fa-map-pin location-icon"
            id="location-icon"
          ></i> */}
        <SearchFunction />
        {/* <input
            type="text"
            placeholder="Enter city"
            className="search-field"
            id="city-input"
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
            title="Search"
          /> */}
        {/* </form> */}
      </div>
      <div className="col-4 celsius-fahrenheit">
        <a href="#" id="celsius-link" className="active" title="Celsius">
          °C
        </a>
        |
        <a href="#" title="Fahrenheit" id="fahrenheit-link">
          °F
        </a>
      </div>
    </div>
  );
}
