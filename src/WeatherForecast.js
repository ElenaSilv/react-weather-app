import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="02d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="01d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="010d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="04d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="09d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mt-1">
          <WeatherIcon code="50d" size={40} />
        </div>
        <div className="col-8 mt-3">
          <span className="WeatherForecast-day"> Sat </span>{" "}
          <span className="WeatherForecast-temp-max"> 19° </span>
          <span className="WeatherForecast-temp-min">/ 8°</span>
        </div>
      </div>
    </div>
  );
}
