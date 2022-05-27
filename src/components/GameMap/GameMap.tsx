import React from 'react';
import Map from 'react-map-gl';

const GameMap = () => {
    return (
        <Map
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
            }}
            style={{ width: '100vw', height: '92vh' }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
    );
};

export default GameMap;
