import React from "react";
import "./WeatherData.css";

export default function Footer() {
  let weatherData = {
    temperature: "14",
    wind: "13",
    humidity: "40",
    img: "https://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src={weatherData.img}
            alt="raining"
            id="icon"
            class="float-left"
          />
          <div className="float-left">
            <strong className="temperature">{weatherData.temperature}</strong>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <ul>
          <li>
            Humidity: <span className="humidity">{weatherData.humidity}</span>%
          </li>
          <li>
            Wind: <span className="wind">{weatherData.wind}</span> km/hr
          </li>
        </ul>
      </div>
    </div>
  );
}
