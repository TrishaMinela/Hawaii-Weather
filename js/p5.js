

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79cf3ff62a1685b8d326951e4140b61b&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 1;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const forecast = jsObject.list.filter( forecast => forecast.dt_txt.includes("18:00:00"));
    console.log(forecast);
    forecast.forEach( x => {
        let date = new Date(x.dt_txt);
        document.getElementById(`days${day}`).textContent = days[date.getDay()];
        document.getElementById(`fiveday${day}`).src = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
        document.getElementById(`fiveday${day}`).alt = "weather icon";
        document.getElementById(`daytemp${day}`).textContent = `${x.main.temp}°F`;
        day++
    })
    

});