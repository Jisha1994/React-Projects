import React, { useState } from "react";

function WeatherInfo() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = '71f6cf9e956daf6db9fb072388e069ed';
    const fetchWeather = async () => {
        if (!city) return;
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                setWeather(data);
                setError(''); 
            } else {
                setError(data.message || 'Error fetching weather data');
            }
        } catch (err) {
            setError('Failed to fetch weather data. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h1>Weather Data</h1>
            <input 
                type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

export default WeatherInfo;
