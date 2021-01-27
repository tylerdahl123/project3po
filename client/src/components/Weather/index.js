import { asRoughSeconds, getSectionHasLiquidHeight } from "@fullcalendar/react";
import React, { useState, useEffect } from "react"
import {Card} from "react-bootstrap"
import "./style.css"
import Rain1 from "../../assets/rain.png"
import Drizzle from "../../assets/drizzle.png"
import Cloud from "../../assets/cloud.png"
import Storm from "../../assets/storm.png"
import Sun from "../../assets/sun.png"
import Snow from "../../assets/snowman.png"

function Weather(props) {

    const [Hi, setHi] = useState('');
    const [Lo, setLo] = useState('');
    const [description, setDescription] = useState('');
    const [now, setNow] = useState('');
    const [icon, setIcon] = useState('');
    const [weather, setWeather] = useState('');
    const [tomorrowHi, setTomorrowHi] = useState('');
    const [tomorrowLo, setTomorrowLo] = useState('');
    const [tomorrowIcon, setTomorrowIcon] = useState('');
    const [humidity, setHumidity] = useState('')

    const { REACT_APP_WEATHER } = process.env
    const newLat = props.loadLat
    const newLong = props.loadLong
    let iconNew
    let tomorrowIconNew

    console.log(props)

        useEffect(()=>{
            if(newLat !== " " && newLong !== " ") {
                weatherCall()
            }
        }, [newLat, newLong])

        function weatherCall() {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${newLat}&lon=${newLong}&exclude=minutely&units=imperial&appid=${REACT_APP_WEATHER}`
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
            setTomorrowHi(data.daily[1].temp.max.toFixed(0))
            setTomorrowLo(data.daily[1].temp.min.toFixed(0))
            setTomorrowIcon(data.daily[1].weather[0].main)
            setHumidity(data.daily[1].humidity)
        })
        }
        if(icon === "Thunderstorm"){
            iconNew = Storm
        }
        if(icon === "Drizzle"){
            iconNew = Drizzle
        }
        if(icon === "Rain"){
            iconNew = Rain1
        }
        if(icon === "Snow"){
            iconNew = Snow
        }
        if(icon === "Clear"){
            iconNew = Sun
        }
        if(icon === "Clouds"){
            iconNew = Cloud
        }
        if(tomorrowIcon === "Thunderstorm"){
            tomorrowIconNew = Storm
        }
        if(tomorrowIcon === "Drizzle"){
            tomorrowIconNew = Drizzle
        }
        if(tomorrowIcon === "Rain"){
            tomorrowIconNew = Rain1
        }
        if(tomorrowIcon === "Snow"){
            tomorrowIconNew = Snow
        }
        if(tomorrowIcon === "Clear"){
            tomorrowIconNew = Sun
        }
        if(tomorrowIcon === "Clouds"){
            tomorrowIconNew = Cloud
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
                <img src={iconNew}></img>
            </div>

          </div>
          <br/>

          <div className="cardbody col-6">
              <h3>Tomorrow's Forecast</h3>
            <div className="row">
                <div className="col-4">
                    Humidity {humidity}%
                </div>
                <div className="col-4 mainTemp">
                    <h5>Hi{tomorrowHi}°F</h5>
                </div>
                <div className ="col-4">
                <h5>Lo{tomorrowLo}°F</h5>
                </div>
            </div>
            <div className="icon">
                {tomorrowIcon}<br/>
                <img src={tomorrowIconNew}></img>
            </div>

          </div>

                </div>
            )

}
export default Weather
