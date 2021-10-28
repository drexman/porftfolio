import React from 'react'
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const SimpleGoogleMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)(( props ) => {

    return (
        <GoogleMap 
            defaultZoom={8}
            defaultCenter={{ lat: props.myposition.lat, lng: props.myposition.lng}}
        >
            {props.markers.map((m, index) => (<Marker key={index}  position={{ lat: m.lat, lng: m.lng }} />))}
        </GoogleMap> 
    )
})

export default SimpleGoogleMap;