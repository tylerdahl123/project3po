import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const MapContainer = (props) => {

    console.log(props)
    const { REACT_APP_MY_ENV } = process.env

    const mapStyles = {        
    height: "40%",
    width: "25vw"};
  const defaultCenter = {
    lat: props.loadLat, 
    lng: props.loadLong
  }
  console.log(defaultCenter)
  const onLoad = trafficLayer => {
console.log('trafficLayer: ', trafficLayer)
  }
  return (
     <LoadScript
       googleMapsApiKey={REACT_APP_MY_ENV} >
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