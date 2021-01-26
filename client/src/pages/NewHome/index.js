import React, { useEffect, useState } from "react"
import "./style.css"
import API from "../../utils/API"
import MapContainer from "../../components/Map"
import Weather from "../../components/Weather"
import TimeTable from "../../components/TimeTable"

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
        <div>            
           <h1> Welcome {localStorage.getItem('user')} </h1>
        </div> 
        <div className="row">
        <div className="col-3" >
        <MapContainer 
            loadLat = {lati}
            loadLong = {long} />
            </div>
            <div className="col-6">
            <TimeTable />
            </div>
            <div className="col-3">
            <Weather 
            loadLat = {lati}
            loadLong = {long}/>
            </div>
            </div>
    </div>
    )
}

export default NewHome