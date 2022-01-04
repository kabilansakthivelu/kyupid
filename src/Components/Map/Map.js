import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import { MapContainer, TileLayer, Polygon, Tooltip} from 'react-leaflet';
import './Map.css';

const Map = () => {

    const {areas, selectedArea } = useContext(ValuesContext);

    return (
        <div className="map">
           <MapContainer center={[12.967523251110662, 77.58927175907674]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {areas.map((area)=>{
                let multiPolygon = [];
                let areaCoordinates = [];
                areaCoordinates = area.geometry.coordinates[0];
                for(let i=0; i<areaCoordinates.length;i++){
                    let sortedArray = areaCoordinates[i].sort(function(a,b){return a-b});
                    multiPolygon.push(sortedArray);
                }
                let generalOptions = { color: "gray", fillColor : "gray", weight:2, opacity:0.7};
                let selectedOptions = { color: "red", fillColor: "red", weight:4, opacity:1};
                let pathOptions = ((area.properties.name === selectedArea) ? selectedOptions : generalOptions);

                return(
                    <Polygon pathOptions={ pathOptions } positions={multiPolygon} key={area.properties.area_id}>
                        <Tooltip>{area.properties.name}</Tooltip>
                    </Polygon>
                )
            })}
            
        </MapContainer> 
        </div>
    )
}

export default Map
