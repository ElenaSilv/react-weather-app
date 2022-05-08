import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-3">{props.data.city}</h2>
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
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={45} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div id="extra-info" className="mt-3">
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
