/* variables */
const apiKey = "05c3dc2ee4be01213995071eec5b9bcc";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
//const searchBtn = document.querySelector(".search-icon");
const inputValue = document.querySelector(".input-field");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wetterlage = document.querySelector(".wetterlage");
let fetched = false;

/* declare functions */
function searchWeather() {
  let citySearched = null;
  let tempSearched = null;
  let wetterlageSearched = null;

  console.log('City: ' + inputValue.value)

  fetch(
    baseUrl +
      "q=" +
      inputValue.value +
      "&appid=" +
      apiKey +
      "&units=metric&lang=de"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      citySearched = data.name;
      tempSearched = Math.ceil(data.main.temp);
      wetterlageSearched = data.weather[0].description;

      changeValues(citySearched, tempSearched, wetterlageSearched);
      inputValue.value = "";
    });
}

function searchWeatherEnter(event) {
  if (event.key == "Enter") {
    searchWeather();
  }
}

function changeValues(citySearched, tempSearched, wetterlageSearched) {
  city.innerText = citySearched;
  temp.innerText = tempSearched + "°C";
  wetterlage.innerText = wetterlageSearched;
}

if (!fetched) {
  city.innerText = "--";
  temp.innerText = "--" + "°C";
  wetterlage.innerText = "Für Wetterlage eine Stadt eingeben..";
}

/* call functions */
inputValue.addEventListener("keyup", searchWeatherEnter);
//searchBtn.addEventListener("click", searchWeather);
