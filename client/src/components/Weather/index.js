import { asRoughSeconds } from "@fullcalendar/react";
import React, { useState, useEffect } from "react"

function Weather(props) {

    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');
    const [lati, setLati] = useState({});
    const [long, setlong] = useState({});
    const [weather, setWeather] = useState({});
    const WeatherAPI = process.env.REACT_APP_WEATHER
    const newLat = props.loadLat
    const newLong = props.loadLong

        useEffect(()=>{
            weatherCall()
        }, [props])

        function weatherCall() {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${newLat}&lon=${newLong}&exclude=minutely&units=imperial&appid=${WeatherAPI}`
        )
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setWeather(data)
        })
    }

    console.log(weather)

    
    return(
        <div>
            New Weather:
        </div>
    )
}
export default Weather