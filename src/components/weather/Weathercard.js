import React from 'react'
import { useEffect } from 'react';
const Weathercard = ({tempInfo}) => {
    const {temp,humidity,pressure,weathermood,name,speed,country,sunset}=tempInfo
    // convert second into time
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [weathermood]);

    let sec=sunset;
    let date=new Date(sec*1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
    <div className="weatherIcon">
    <i className={`wi ${weatherState}`}></i>
    </div>
    <div className="weatherInfo">
        <div className="temperature">
            <span>{temp}&deg;</span>
        </div>
        <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
                {name},{country}
            </div>
        </div>

    </div>
    <div className="date">
        {new Date().toLocaleString()}
    </div>
    {/* Our Column */}
    <div className="extra-temp">
        <div className="temp-info-minmax">
            <div className="two-sided-section">
                <p><i className='wi wi-sunset'></i></p>
                <p className="extra-info-leftside">{timestr}pm<br/>Sunset</p>
            </div>
            <div className="two-sided-section">
                <p><i className='wi wi-humidity'></i></p>
                <p className="extra-info-leftside">{humidity}pm<br/>Humidity</p>
            </div>
        </div>
        <div className="weather-extra-info">
        <div className="two-sided-section">
                <p><i className='wi wi-rain'></i></p>
                <p className="extra-info-leftside">{pressure}pm<br/>Pressure</p>
            </div>
            <div className="two-sided-section">
                <p><i className='wi wi-strong-wind'></i></p>
                <p className="extra-info-leftside">{speed}pm<br/>Speed</p>
            </div>
        </div>
    </div>
</article>
    </>
  )
}

export default Weathercard
