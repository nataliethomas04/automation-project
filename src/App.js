import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '276fe28d3d1e39aea70485b108a022e9';  // Replace with your actual API key

  const fetchWeather = async () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }

    setError('');
    setWeather(null);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button onClick={fetchWeather} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
        Get Weather
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
