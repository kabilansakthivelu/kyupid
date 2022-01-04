import React, {useEffect, useState, useContext, useRef} from 'react';
import Map from '../Map/Map';
import Search from '../Search/Search';
import Results from '../Results/Results';
import './Content.css';

export const ValuesContext = React.createContext();

const Content = () => {

    const [areas, setAreas] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedArea, setSelectedArea] = useState();

    const selectedAreaRef = useRef();

    //Fetching data from APIs

    const fetchingData = async() =>{
        const urls = ["https://kyupid-api.vercel.app/api/areas", "https://kyupid-api.vercel.app/api/users"];
        const resp = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(resp.map(response => response.json()));
        setAreas(data[0].features);
        setUsers(data[1].users);
    }

    useEffect(()=>{
        fetchingData();
    }, [])

    // Search function for getting details about the selected Area

    const searchFunction = (e) =>{
        e.preventDefault();
        if(selectedAreaRef.current.value === "null"){
            alert("Please select an area");
        }
        else{
            setSelectedArea(selectedAreaRef.current.value);
        }
    }

    //Back to search function for navigating back to Search from results page

    const backToSearchFunction = () =>{
        setSelectedArea();
    }

    const selectedAreaDetails = areas.find((area)=>{
            return area.properties.name === selectedArea
    })

    return (
        <div className="content">
            <div className="contentModal">
            <ValuesContext.Provider value={{areas, users, selectedAreaRef, searchFunction, selectedArea, backToSearchFunction, selectedAreaDetails}}>
            
            {/* If selectedArea is having a value, then display Results Component or else display Search component */}

            {selectedArea ? <Results/> : <Search/>}

            <Map/>
            </ValuesContext.Provider>
            </div>
        </div>
    )
}

export default Content
