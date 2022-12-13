import React from "react";
import "./styles.css";
import Footer from "./Footer";
import Search from "./Search";
import City from "./City";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          
          <Search />
          <City />
          <WeatherData /> 
          
        </div>
        <Footer />
      </div>
    </div>
  );
}
