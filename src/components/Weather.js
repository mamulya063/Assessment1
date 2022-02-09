import { useState } from "react";

const Weather = () => {
  const [temperature, setTemperature] = useState(0);

  function handleTemperatureIncrement() {
    if (temperature < 50) setTemperature((p) => p + 1);
  }

  function handleTemperatureDecrement() {
    if (temperature > 0) setTemperature((p) => p - 1);
  }

  return (
    <div>
      <h1>Weather</h1>
      <button onClick={handleTemperatureDecrement}>-</button>
      <h3>{temperature}</h3>
      <button onClick={handleTemperatureIncrement}>+</button>
      {temperature > 35 ? (
        <p>Hot</p>
      ) : temperature < 15 ? (
        <p>Cold</p>
      ) : (
        <p>Moderate</p>
      )}
    </div>
  );
};

export default Weather;
