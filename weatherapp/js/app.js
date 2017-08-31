$(document).foundation();

window.onload = function () {


var x = document.getElementById("x");
getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(logPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function logPosition(position) {
	var latitue = position.coords.latitude;
	var longitude = position.coords.longitude;
	 x.innerHTML = "Latitude: " + latitue +
    "<br>Longitude: " + longitude;
	getWeather(latitue, longitude);

}
  function getWeather(lat, lon) {
      $.getJSON("api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=9d2edcd891bf9465d03dd7e31cf9c1e2", function(response) {
        $("#response").text(response);
      });
    }


}; // onload
