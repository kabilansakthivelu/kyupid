import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import './Results.css';

const Results = () => {

    const {backToSearchFunction, users, selectedAreaDetails, areas, selectedArea} = useContext(ValuesContext);

    const selectedAreaId = selectedAreaDetails.properties.area_id;

    const totalUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            total += 1;
        }
        return total;
    }, 0)

    const totalProUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.is_pro_user === true){
            total += 1;
            }
        }
        return total;
    }, 0)

    const totalMaleUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.gender === "M"){
                total += 1;
            }
        }
        return total;
    }, 0)

    const totalFemaleUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.gender === "F"){
                total += 1;
            }
        }
        return total;
    }, 0)

    let genderRatio = "";
    const ratio = (male, female) =>{
        for(let i = male; i>1; i--){
            if((male % i === 0) && (female % i === 0)){
                male /= i;
                female /= i;
            }
            genderRatio = `${male} : ${female}`;
        }
    }

    ratio(totalMaleUsers, totalFemaleUsers);

    const aboveAge30Users = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.age > 30){
                total += 1;
            }
        }
        return total;
    }, 0)

     const belowAndAge30Users = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.age <= 30){
                total += 1;
            }
        }
        return total;
    }, 0)

    return (
        <div className="resultsSection">
            <h1 className="backToSearchLinkSection" onClick={backToSearchFunction}>&lt;  <span className="backToSearchLink">Back to search</span></h1>
            <hr />
            <h1 className="resultsSectionHeading">Search results</h1>
            <div className="results">
            <h1>Area: {selectedArea}</h1>
            <h1>Pincode: {selectedAreaDetails.properties.pin_code}</h1>
            <h1>Total no. of users = {totalUsers}</h1>
            <h1>Total no. of Pro users = {totalProUsers}</h1>
            <h1>Total no. of male users = {totalMaleUsers}</h1>
            <h1>Total no. of female users = {totalFemaleUsers}</h1>
            <h1>Ratio (male : female) = {genderRatio}</h1>
            <h1>Users above age 30 = {aboveAge30Users}</h1>
            <h1>Users below and age 30 = {belowAndAge30Users}</h1>
            </div>
        </div>
    )
}

export default Results
