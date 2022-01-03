import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="searchSection">
            <h1 className="sectionHeading">Search by Area</h1>
            <hr />
            <p className="description">Need help in getting more insights about users?</p>
            <p className="description">Filter out an area from the dropdown below to get more details about the users from that area in Bangalore.</p>
            <form>
            <select className="areaDropdown">
            <option value="Koramangala">Koramangala</option>
            </select>
            <button className="searchButton">Search</button>
            </form>
        </div>
    )
}

export default Search
