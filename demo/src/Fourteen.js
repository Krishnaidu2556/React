import React, { useEffect, useState } from 'react';

function Fourteen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=58c3194cd2a289bbaa7cd9e04ee2685a&units=metric`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Weather data fetch failed');
            }
            return response.json();
          })
          .then((data) => setWeather(data))
          .catch((error) => console.log('Error:', error));
      });
    } else {
      console.log('Geolocation not supported');
    }
  }, []);

  return (
    <div>
      {weather && weather.main && weather.weather ? (
        <div>
          <h1>{weather.name}</h1>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Fourteen;
