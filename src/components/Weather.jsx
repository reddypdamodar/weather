import "../Weather.css";
import { useState } from "react";
import Display from "./Display";
import Error from "./Error";

const api = {
  key: process.env.REACT_APP_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [clicked, setclicked] = useState(false);

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = async () => {
    await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
    setclicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          {api.env}
          <input
            autoComplete="on"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <Display weather={weather} />
        ) : (
          <Error click={clicked} />
        )}
      </header>
    </div>
  );
}

export default Weather;
