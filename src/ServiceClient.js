import axios from 'axios';
import * as routes from './routes'

export function getRouteData() {
    const routeData = routes.data.routes;
    return routeData;
    // axios.get(baseUrl)
    //     .then(response => {
    //         return response.data;
    //     })
    //     .catch(error => {
    //         return error.message;
    //     });
}