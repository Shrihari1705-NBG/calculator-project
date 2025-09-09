const apiKey = "24f8611577msh38ab5e27314c339p133552jsn93ccf405af02"; 
const weatherCard = document.getElementById("weather-card");

async function getWeather() {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherCard.style.display = "block";
  } catch (error) {
    alert(error.message);
  }
}const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN');
xhr.setRequestHeader('x-rapidapi-key', '24f8611577msh38ab5e27314c339p133552jsn93ccf405af02');
xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');

xhr.send(data);