import React from "react";
import "./City.css";

export default function Footer() {
  let weatherData = {
    city: "Harare",
    date: "Friday 13:00",
    description: "Raining"
  };
  return (
    <div class="overview">
      <h1 className="city">{weatherData.city}</h1>
      <ul>
        <li>
          Last updated: <span className="date">{weatherData.date}</span>
        </li>
        <li class="description">{weatherData.description}</li>
      </ul>
    </div>
  );
}