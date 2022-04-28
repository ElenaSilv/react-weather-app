import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
        <h1 className="mt-3">{weatherData.city}</h1>
        <div className="overview">
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row" id="weather-temp">
          <div className="col-8">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <strong>{Math.round(weatherData.temperature)}</strong>
            <span id="unit">°C</span>
          </div>
          <div id="extra-info">
            <ul>
              <li>Precipitation: 5%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "36627385a0b4fa9441ba14c41f6e63ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
