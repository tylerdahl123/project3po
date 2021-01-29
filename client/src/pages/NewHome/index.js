import React, { useEffect, useState } from "react"
import "./style.css"
import API from "../../utils/API"
import MapContainer from "../../components/Map"
import Weather from "../../components/Weather"
import TimeTable from "../../components/TimeTable"

function NewHome(props) {

    const [lati, setLati] = useState(' ');
    const [long, setlong] = useState(' ');
    const [newStyle, setNewStyle] = useState({})

    useEffect(() => {
        loadLat()
        loadLong()
      }, [])

  const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

  useEffect(() => {
  if(isLoggedIn) {
    const newLight = setNewStyle("light")
    clearInterval(newLight)
  }else{
    const newDark = setNewStyle("dark")
  clearInterval(newDark)
  }
}, [isLoggedIn])
    
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
    <div className={newStyle}>
        <div>         
           <h1> Welcome {localStorage.getItem('user')} </h1>
        </div> 
        <div className="row">
          <div className="col-1">
            
          </div>
        <div className="col-5">
            <TimeTable />
            </div>
            <div className="col-1"></div>
        <div className="col-4" >
        <MapContainer
            loadLat = {lati}
            loadLong = {long} />
            <br />
            <Weather
            loadLat = {lati}
            loadLong = {long}/>
            </div>
            </div>
    </div>
    )
}

export default NewHome