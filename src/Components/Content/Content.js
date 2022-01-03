import React, {useEffect, useState, useContext, useRef} from 'react';
import Map from '../Map/Map';
import Search from '../Search/Search';
import './Content.css';

export const ValuesContext = React.createContext();

const Content = () => {

    const [areas, setAreas] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedArea, setSelectedArea] = useState();

    const selectedAreaRef = useRef();

    const fetchingData = async() =>{
        const urls = ["https://kyupid-api.vercel.app/api/areas", "https://kyupid-api.vercel.app/api/users"];
        const resp = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(resp.map(response => response.json()));
        setAreas(data[0].features);
        setUsers(data[1]);
    }

    useEffect(()=>{
        fetchingData();
    }, [])

    const searchOperation = (e) =>{
        e.preventDefault();
        setSelectedArea(selectedAreaRef.current.value);
    }

    return (
        <div className="content">
            <div className="contentModal">
            <ValuesContext.Provider value={{areas, selectedAreaRef, searchOperation, selectedArea}}>
            <Search/>
            <Map/>
            </ValuesContext.Provider>
            </div>
        </div>
    )
}

export default Content
