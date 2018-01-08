import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // ref system in React, can call this.refs.map inside this component.
        // Useful for libraries that doesn't know React - refer to an actual
        // HTML element.
        return <div ref="map" />;
    }
}

export default GoogleMap;