import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "f655bf7d598315d4804079c2ed1fac79";
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Munnar&units=metric&appid=${apiKey}`
        );

        if (!res.ok) {
          // surface clear error to UI instead of letting component crash
          const errText = `${res.status} ${res.statusText}`
          setError(`Weather API error: ${errText}`)
          return
        }

        const data = await res.json()

        setWeather(data)
      } catch (error) {
        console.error(error)
        setError(error.message || 'Weather fetch failed')
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div className="glass p-6">
        {error ? <div className="text-red-400">{error}</div> : 'Loading Weather...'}
      </div>
    )
  }

  return (
    <div className="glass p-6">
      <h2 className="text-2xl font-bold mb-4">
        🌦 Weather
      </h2>

      <h3 className="text-5xl font-bold">
        {weather?.main?.temp != null ? `${Math.round(weather.main.temp)}°C` : 'N/A'}
      </h3>

      <p className="text-gray-400 mt-2">{weather?.weather?.[0]?.main || '—'}</p>

      <p className="text-gray-400">{weather?.name || 'Unknown location'}</p>
    </div>
  );
}