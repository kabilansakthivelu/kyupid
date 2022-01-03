import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import { MapContainer, TileLayer, Polygon, Tooltip} from 'react-leaflet';
import './Map.css';

const Map = () => {

    const {areas, selectedArea } = useContext(ValuesContext);

    let multiPolygon = [];

    if(selectedArea){
        let selectedAreaDetails = areas.find((area)=>{
            return area.properties.name === selectedArea
        })
        let selectedAreaCoordinates = selectedAreaDetails.geometry.coordinates[0];
        for(let i=0; i<selectedAreaCoordinates.length;i++){
            let sortedArray = selectedAreaCoordinates[i].sort(function(a,b){return a-b});
            multiPolygon.push(sortedArray);
        }
    }

    console.log(multiPolygon);

    return (
        <div className="map">
           <MapContainer center={[12.967523251110662, 77.58927175907674]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
                <Tooltip>{selectedArea}</Tooltip>
            </Polygon>
        </MapContainer> 
        </div>
    )
}

export default Map
