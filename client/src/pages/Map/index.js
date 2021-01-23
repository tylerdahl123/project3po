import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const MapContainer = (props) => {

    console.log(props)

    var lati
    var long
    navigator.geolocation.getCurrentPosition(function(position) {
        lati = position.coords.latitude
        long = position.coords.longitude
    });
    const mapStyles = {        
    height: "30vh",
    width: "100%"};
  const defaultCenter = {
    lat: props.loadLat, 
    lng: props.loadLong
  }
  const onLoad = trafficLayer => {
console.log('trafficLayer: ', trafficLayer)
  }
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCL1pqTz4iiPIuP1_RB2NacTwUsuwc2LG8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
        <TrafficLayer
        onLoad={onLoad}
        />
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;