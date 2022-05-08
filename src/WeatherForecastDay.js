import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="row mt-3">
        <div className="col-4 mt-1">
          <WeatherIcon code={props.data.weather[0].icon} size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> {day()} </span>{" "}
          <span className="WeatherForecast-temp-max"> {maxTemperature()} </span>
          <span className="WeatherForecast-temp-min">/{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
