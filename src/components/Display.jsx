import React from "react";
import "./display.css";

const Display = (data) => {
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather.weather[0].icon : null}` +
    ".png";
  return (
    <div>
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <br />
            <span className="cardtitle"> Weather in </span>
            <span className="cardtitle">{data.weather.name} </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.weather.main.temp)}
              <sup>o</sup>C
            </h1>
            <span className="weather-main">{data.weather.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="" srcSet="" />
            <span className="weather-description">
              {" "}
              {data.weather.weather[0].description}
            </span>
          </div>
          <div>
            <table className="center">
              <tbody>
                <tr>
                  <td>
                    <h4>High/Low Temperature</h4>
                  </td>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      {Math.floor(data.weather.main.temp_max)} <sup>o</sup>C/
                      {Math.floor(data.weather.main.temp_min)} <sup>o</sup>C
                    </span>
                  </td>
                  <td>
                    <span>{data.weather.main.humidity} %</span>
                  </td>

                  <td>
                    <span>{data.weather.main.pressure} hPa</span>
                  </td>

                  <td>
                    <span>{data.weather.visibility / 1000} Km</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <table className="center">
                <tbody>
                  <tr>
                    <td>
                      <h4>Wind</h4>
                    </td>
                    <td>
                      <h4>Wind Direction</h4>
                    </td>
                    <td>
                      <h4>Sunrise</h4>
                    </td>
                    <td>
                      <h4>Sunset</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {Math.floor((data.weather.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>

                    <td>
                      <span>
                        {data.weather.wind.deg}
                        <sup>o</sup> deg
                      </span>
                    </td>

                    <td>
                      <span>
                        {new Date(
                          data.weather.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </span>
                    </td>

                    <td>
                      <span>
                        {new Date(
                          data.weather.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.weather.message}</h2>
        </div>
      )}
    </div>
  );
};

export default Display;
