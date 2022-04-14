const onGeoOk = (pos) => {
  console.log(pos);
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const APIkey = "fed5f48ab273601bbc5efb9b5696d0b7";
  const city = document.querySelector("#weather span:first-child");
  const weather = document.querySelector("#weather span:last-child");

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} : ${data.main.temp}`;
      //   console.log(data.weather[0].main);
      //   console.log(data.main.temp, data.main.temp_min, data.main.temp_max);
      //   console.log(data.name);
    });
};

const onGeoErr = () => {
  alert("Can not retrieve your geolocation info!!!");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
