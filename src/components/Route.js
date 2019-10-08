import React, {Component} from 'react';
import { List } from 'semantic-ui-react'

class Route extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <List.Item onClick={() => {this.props.getRoute(this.props.stops)}}>
            {this.props.longName}
        </List.Item>
)}
}

export default Route;