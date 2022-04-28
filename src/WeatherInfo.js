import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3">{props.data.city}</h1>
      <div className="overview">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row" id="weather-temp">
        <div className="col-8">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <strong>{Math.round(props.data.temperature)}</strong>
          <span id="unit">°C</span>
        </div>
        <div id="extra-info">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
