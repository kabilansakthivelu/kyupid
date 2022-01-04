import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import './Results.css';

const Results = () => {

    const {backToSearchFunction, users, selectedAreaDetails, areas, selectedArea} = useContext(ValuesContext);

    const selectedAreaId = selectedAreaDetails.properties.area_id;

    //Total users

    const totalUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            total += 1;
        }
        return total;
    }, 0)

    //Total Pro users

    const totalProUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.is_pro_user === true){
            total += 1;
            }
        }
        return total;
    }, 0)

    //Total Male users

    const totalMaleUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.gender === "M"){
                total += 1;
            }
        }
        return total;
    }, 0)

    //Total Female users

    const totalFemaleUsers = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.gender === "F"){
                total += 1;
            }
        }
        return total;
    }, 0)

    //Gender ratio

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

    //Total users above 30 years of age

    const aboveAge30Users = users.reduce((total, user)=>{
        if(user.area_id === selectedAreaId){
            if(user.age > 30){
                total += 1;
            }
        }
        return total;
    }, 0)

    //Total users age equals to and less than 30

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
            <h1>Area: <span className="resultValues">{selectedArea}</span></h1>
            <h1>Pincode: <span className="resultValues">{selectedAreaDetails.properties.pin_code}</span></h1>
            <h1>Total no. of users = <span className="resultValues">{totalUsers}</span></h1>
            <h1>Total no. of Pro users = <span className="resultValues">{totalProUsers}</span></h1>
            <h1>Total no. of male users = <span className="resultValues">{totalMaleUsers}</span></h1>
            <h1>Total no. of female users = <span className="resultValues">{totalFemaleUsers}</span></h1>
            <h1>Ratio (male : female) = <span className="resultValues">{genderRatio}</span></h1>
            <h1>Users above age 30 = <span className="resultValues">{aboveAge30Users}</span></h1>
            <h1>Users below and age 30 = <span className="resultValues">{belowAndAge30Users}</span></h1>
            </div>
        </div>
    )
}

export default Results
