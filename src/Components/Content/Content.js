import React from 'react';
import Map from '../Map/Map';
import Search from '../Search/Search';
import './Content.css';

const Content = () => {
    return (
        <div className="content">
            <div className="contentModal">
            <Search/>
            <Map/>
            </div>
        </div>
    )
}

export default Content
