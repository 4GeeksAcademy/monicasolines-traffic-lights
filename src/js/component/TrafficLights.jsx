import React, {useState} from "react";
import { Circles } from "./Circles.jsx";


export const TrafficLights = () => {
    


    return (
        <div className="justify-content-center align-content-center" style={{display: 'inline-block'}}> 
            <div className="d-flex flex-column border border-dark p-3 mt-0 m-3 bg-dark" >
            <Circles/>
            </div>
             
        </div>
          
    )
    
}