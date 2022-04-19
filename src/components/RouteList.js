import React, {useState, useEffect} from 'react';
import { List } from 'semantic-ui-react'
import {getRouteData} from '../ServiceClient';
import Route from '../components/Route';

function RouteList(props) {
    const [routeData, setRouteData] = useState([]);

   useEffect( () => {
       const data = getRouteData()
       setRouteData(data)
    })

    const allRoutes = () => {
       return routeData.map(route => {
           return (
           <Route
             key={route.gtfsId}
             longName={route.longName}
             stops={route.stops}
             getRoute={props.getRoute}>
           </Route>
           )
       })
    }

    return (
        <List>
            <h1>Reitit</h1>
            {allRoutes()}
        </List>

    )
}

export default RouteList;
