import React, { useEffect, useState } from "react"
import "./style.css"
import API from "../../utils/API"
import MapContainer from "../../components/Map"
import Weather from "../../components/Weather"

function NewHome() {

    const [lati, setLati] = useState(' ');
    const [long, setlong] = useState(' ');

    useEffect(() => {
        loadLat()
        loadLong()
      }, [])
    
      const loadLat = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const newLati = setLati(position.coords.latitude)
            return() => clearInterval(newLati)
          });
        }
        const loadLong = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                const newLong = setlong(position.coords.longitude)
                return() => clearInterval(newLong)
              });
            }

    return(
    <div>
        <MapContainer 
            loadLat = {lati}
            loadLong = {long} />
            <Weather 
            loadLat = {lati}
            loadLong = {long}/>
    </div>
    )
}

export default NewHome