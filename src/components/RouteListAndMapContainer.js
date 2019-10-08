import React, {useState} from 'react';
import RouteList from "./RouteList";
import {GoogleMap, withScriptjs, withGoogleMap, Polyline} from "react-google-maps";

function RouteListAndMapContainer() {
    const[draw, setDraw] = useState(false)
    const[stations, setStations] = useState("")

    function Map() {

        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{lat: 60.169857, lng: 24.938379}}
            >
                {draw && drawRoute(stations)}
            </GoogleMap>
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    function getRoute(stops) {
        setStations(stops);
        setDraw(true)
    }

    function drawRoute(data) {
        const stations = data;

        let myArray = [];
        for (let i = 0; i < stations.length; ++i) {
            myArray.push({lat: stations[i].lat, lng: stations[i].lon})
        }

        if (stations) {
           return <Polyline path={myArray} options={{strokeColor: "#FF0000"}}/>
        } else {
            return null;
        }
    }

    return(
        <div>
        <div className="Route">
            <RouteList getRoute={getRoute}/>
        </div>
        <div className="Map">
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=?`}
                        loadingElement={<div style={{height: '100%'}}/>}
                        containerElement={<div style={{height: '100%'}}/>}
                        mapElement={<div style={{height: '100%'}}/>}/>
        </div>
        </div>
    )
}
export default RouteListAndMapContainer;