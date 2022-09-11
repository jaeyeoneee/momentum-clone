const API_KEY = "11320122e97f6aeb221a749b73c1e636";

function onGoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".upper-bar__weather");
      weather.innerText = `${data.name} · ${data.weather[0].main}`;
      //   city.innerText = data.name;
      //   weather.innerText = `${data.weather[0].main} /${data.main.temp} `;
    });
}

function OnGoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGoOk, OnGoError);
