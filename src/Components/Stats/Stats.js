import React, {useContext} from 'react';
import {ValuesContext} from '../Content/Content';
import './Stats.css';

const Stats = () => {

    const {users} = useContext(ValuesContext);

    const allUsers = users.length;

    const proUsers = users.reduce((total, user)=>{
        if(user.is_pro_user === true){
            total += 1;
        }
        return total;
    }, 0)

    const maleCount = users.reduce((total, user)=>{
        if(user.gender === "M"){
            total += 1;
        }
        return total;
    }, 0)

    const femaleCount = users.reduce((total, user)=>{
        if(user.gender === "F"){
            total += 1;
        }
        return total;
    }, 0)


    return (
        <div>
            <h1 className="sectionHeading">Stats</h1>
             <hr />
            <div className="statsSection">

            <div className="usersStats">
            <div className="stats">
            <h1 className="statsValue">{allUsers}</h1>
            <p className="statsHeadline">Users</p>
            </div>
            <div className="stats">
            <h1 className="statsValue">{proUsers}</h1>
            <p className="statsHeadline">Pro users</p>
            </div>
            </div>

            <div className="usersStats">
            <div className="stats">
            <h1 className="statsValue">{maleCount}</h1>
            <p className="statsHeadline">Male</p>
            </div>
            <div className="stats">
            <h1 className="statsValue">{femaleCount}</h1>
            <p className="statsHeadline">Female</p>
            </div>
            </div>

            </div>
        </div>
    )
}

export default Stats
