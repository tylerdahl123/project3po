import React, { useEffect, useState } from "react";
// import MapContainer from "../Map"
import LoginFirst from "../../components/LoginFirst";
import TimeTable from "../../components/TimeTable";
import '../style.css';

export default function Cal(){  

    const [lati, setLati] = useState({});
    const [long, setlong] = useState({});

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
        

        const setShow=()=>{       
            if (localStorage.getItem('login') === 'true'){
                   return <TimeTable /> 
                } else {
                    return <LoginFirst />
              }
        }

        return(
            <div className="page-container">
                <div className="content-wrap">
                    <h1>
                        Calendar
                    </h1>
                    {/* <TimeTable /> */}
                    {/* <MapContainer 
                        loadLat = {lati}
                        loadLong = {long} /> */}

                        { setShow() }
                </div>
            </div>
        )
    }