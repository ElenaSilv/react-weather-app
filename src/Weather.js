import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "36627385a0b4fa9441ba14c41f6e63ca";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-secondary">
              Click me!
            </button>
          </div>
        </div>
      </form>
      <h1 className="mt-3">LONDON</h1>
      <div className="overview">
        <ul>
          <li>Wednesday, 20th April</li>
          <li>Sunny</li>
        </ul>
      </div>
      <div className="row" id="weather-temp">
        <div className="col-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <strong>14</strong>
          <span id="unit">°C</span>
        </div>
        <div id="extra-info">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 40%</li>
            <li>Wind:20 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
