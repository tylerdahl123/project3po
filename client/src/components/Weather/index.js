import { asRoughSeconds, getSectionHasLiquidHeight } from "@fullcalendar/react";
import React, { useState, useEffect } from "react"
import {Card} from "react-bootstrap"
import "./style.css"

function Weather(props) {

    const [Hi, setHi] = useState('');
    const [Lo, setLo] = useState('');
    const [description, setDescription] = useState('');
    const [now, setNow] = useState('');
    const [icon, setIcon] = useState('');
    const [weather, setWeather] = useState('');
    const WeatherAPI = process.env.REACT_APP_WEATHER
    const newLat = props.loadLat
    const newLong = props.loadLong
    let iconNew

    console.log(props)

        useEffect(()=>{
            if(newLat !== " " && newLong !== " ") {
                weatherCall()
            }
        }, [newLat, newLong])

        function weatherCall() {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${newLat}&lon=${newLong}&exclude=minutely&units=imperial&appid=${WeatherAPI}`
        )
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setWeather(data)
            setNow(data.current.temp.toFixed(0))
            setDescription(data.current.weather[0].main)
            setHi(data.daily[0].temp.max.toFixed(0))
            setLo(data.daily[0].temp.min.toFixed(0))
            setIcon(data.daily[0].weather[0].main)
        })
        }
        if(icon === "Thunderstorm"){
            iconNew = "fas fa-poo-storm"
        }
        if(icon === "Drizzle"){
            iconNew = "fas fa-cloud-sun-rain"
        }
        if(icon === "Rain"){
            iconNew = "fas fa-cloud-showers-heavy"
        }
        if(icon === "Snow"){
            iconNew = "fas fa-snowflake"
        }
        if(icon === "Clear"){
            iconNew = "fas fa-sun"
        }
        if(icon === "Clouds"){
            iconNew = "fas fa-cloud"
        }

        return(
                <div>
          <div className="cardbody">
              <h3>Today's Forecast</h3>
            <div className="row">
                <div className="col-4">
                    Now: {description}
                </div>
                <div className="col-4 mainTemp">
                    <Card.Title>{now}°F</Card.Title>
                </div>
                <div className ="col-4">
                    Hi{Hi}°F Lo{Lo}°F
                </div>
            </div>
            <div className="icon">
                {icon}<br/>
                <i className={iconNew}></i>
            </div>

          </div>

                </div>
            )

}
export default Weather
