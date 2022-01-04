import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import './Search.css';

const Search = () => {

    const {areas, selectedAreaRef, searchFunction} = useContext(ValuesContext);

    //Sorting the area dropdown values in alphabetical order

    areas.sort(function(a,b){return a.properties.name.localeCompare(b.properties.name)});

    return (
        <div className="searchSection">
            <h1 className="sectionHeading">Search by Area</h1>
            <hr />
            <p className="description">Filter out an area from the dropdown below to get more details about the users from that area in Bangalore.</p>
            <form onSubmit={searchFunction}>
            <select className="areaDropdown" ref={selectedAreaRef}>
            <option value="null">Please select an area</option>
            {areas.map((area)=>{
                return <option value={area.properties.name} key={area.properties.area_id}>{area.properties.name}</option>
            })}
            </select>
            <button className="searchButton">Search</button>
            </form>
        </div>
    )
}

export default Search
