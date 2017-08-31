/*jshint esversion: 6 */

import $ from 'jquery';
// import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

window.onload = function () {

// Define
var latitue = 0;
var longitude = 0;
var condition = 0;

const appid = "9d2edcd891bf9465d03dd7e31cf9c1e2";
const unit = "&units=metric";
const lang = "&lang=de";

// Run
runner (); function runner() {
    getLocation();
}

function callback() {

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(logPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function logPosition(position) {
	latitue = position.coords.latitude;
	longitude = position.coords.longitude;
  console.log("lat: " + latitue + "\nlon: " + longitude);
	getWeather(latitue, longitude);

}

function getWeather(lat, lon) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + unit + lang + "&appid=" + appid, function(response) {
      //$("#response").text(response);
      console.log(response);
      condition = response.weather[0].id;
      console.log("condition: " + condition);
      var description = response.weather[0].description;
      var temperature = response.main.temp;
      var windspeed = response.wind.speed;
      var city = response.name;
      display(city, temperature, windspeed, description);
    });
  }

function display(city, temp, wind, descr) {
  $("#loading").hide();
  $("#weather_facts").show();
  $("#city").text(city);
  $("#temperature").text(temp);
  $("#windspeed").text(wind);
  $("#weather_description").text(descr);
  checkCondition(condition);
}

function checkCondition(c) {
  switch (true) {
    case (c >= 200 && c < 300):
      $(".icon.thunder-storm").show();
      return "storm";
    case (c >= 300 && c < 400):
      $(".icon.sun-shower").show();
      return "drizzle";
    case (c >= 500 && c < 600):
      $(".icon.rainy").show();
      return "rain";
    case (c >= 600 && c < 700):
      $(".icon.flurries").show();
      return "snow";
    case (c === 800):
      console.log("sunny");
      $(".icon.sunny").show();
      return "sunny";
    case (c > 800 && c < 900):
    $(".icon.cloudy").show();
      return "clouds";
  }
}

}; // onload
