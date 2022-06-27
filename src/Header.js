import React from "react";
import SearchFunction from "./SearchFunction";
import "./Header.css";

export default function Header() {
  return (
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
  );
}
