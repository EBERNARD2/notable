import React from "react";
import { useEffect } from "react";
export default function SideBar(props) {

    let physicians = [];
    props.physicians.forEach(physician => {
        physicians.push(
            <h5 
            id={physician.id}
            onClick={ (e) => {props.getAppointments(e)}}
            >
                {physician.lastname}, {physician.firstname}
            
            </h5>
        );
    })
    
    return (
        <div>
            <h1>Notable</h1>
            <h4>Physicians</h4>
            {physicians}
        </div> 
    );

}