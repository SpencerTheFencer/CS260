document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=e52d1d116c8137720a250a0dca07a015";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<div class="current-container">';
      results += '<h2>Current weather in ' + json.name + "</h2>";
      results += '<div class="double-horizontal-item">';
      for (let i=0; i < json.weather.length; i++) {
	       results += '<img class="icon" src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<div class="container-item">';
      results += '<h2 class="temp">' + json.main.temp.toFixed() + " &deg;F</h2>";
      results += '<p class="feels-like info">Feels like ' + json.main.feels_like.toFixed() + " &deg;F</p>";
      results += '</div></div>';
      results += '<p class="info description">';
      for (let i=0; i < json.weather.length; i++) {
	       results += json.weather[i].description;
	       if (i !== json.weather.length - 1)
	       results += ", "
      }
      results += '</p>';
      results += '<div class="double-horizontal-item">';
      results += '<p class="info" id="min">Min: ' + json.main.temp_min.toFixed() + ' &deg;F</p>';
      results += '<p class="info" id="max">Max: ' + json.main.temp_max.toFixed() + ' &deg;F</p>';
      results += '</div>';
      results += '</div>';
      console.log(results);
      document.getElementById("weatherResults").innerHTML = results;
    });

  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=e52d1d116c8137720a250a0dca07a015";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let forecast = '<div class="forecast-table">';
      forecast += '<h2 class="forecast-title">Forecast for ' + value + "</h2>";
      let currentDateTime = "";
      for (let i=0; i < json.list.length; i++) {
         let dateTime = moment(json.list[i].dt_txt).format('MMMM Do, YYYY');
         let isNewDay = currentDateTime !== dateTime;
         if (isNewDay) {
           currentDateTime = dateTime;
           if (i != 0) forecast += '</div>';
           forecast += '<div class="day">';
           forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do, YYYY') + "</h2>";
         }
         forecast += '<div class="row">';
         forecast += '<h3 class="row-item">' + moment(json.list[i].dt_txt).format('h a') + "</h3>";
	       forecast += '<img class="row-item" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
         forecast += '<h3 class="row-item info">' + json.list[i].main.temp.toFixed() + " &deg;F</h3>";
         forecast += '<p class="row-item info description">' + json.list[i].weather[0].description;
         forecast += '<p class="feels-like info row-item row-extra">Feels like ' + json.list[i].main.feels_like.toFixed() + " &deg;F</p>";
         forecast += '<p class="info row-item row-extra">Wind: ' + json.list[i].wind.speed + ' mph ' + degToCompass(json.list[i].wind.deg).toUpperCase()  + "</p>";
         forecast += '</div>'
      }
      forecast += "</div></div>";
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});

function degToCompass(num) {
    let val = ((num/22.5)+.5).toFixed();
    let arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(val % 16)];
}
