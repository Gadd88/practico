//API CLIMA
/*************************************************************************** */

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
  };
  
  const apiKey = "3653d5bce8c0ea0f4386f3db4f6f79ac";
  
  const fetchData = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&lang=sp,es&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };
  
  const setWeatherData = (data) => {
    // console.log(data);
    const weatherData = {
      location: data.name,
      temp: `${data.main.temp} °C`,
      description: data.weather[0].main,
    };
    Object.keys(weatherData).forEach((key) => {
      document.getElementById(key).textContent = `${weatherData[key]}`;
    });
  };