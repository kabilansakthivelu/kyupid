import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import './Map.css';

const Map = () => {

    return (
        <div className="map">
           <MapContainer center={[12.967523252219662, 77.78927175907674]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer> 
        </div>
    )
}

export default Map
