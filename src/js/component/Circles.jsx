import React, { useState } from "react";

export const Circles = () => {
    const [isRedActive, setRedIsActive] = useState(false);
    const [isYellowActive, setYellowIsActive] = useState(false);
    const [isGreenActive, setGreenIsActive] = useState(false);

    const circleStyleGreen = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue', 
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        boxShadow: isGreenActive && !isRedActive && !isYellowActive ? '0px 0px 9px 4px green' : 'none',
        boxShadow: isGreenActive && !isRedActive && !isYellowActive ? '0px 0px 30px 20px rgba(0, 255, 0, 0.3)' : 'none',
        animation: isGreenActive && !isRedActive && !isYellowActive ? 'glow 0.8s linear infinite alternate' : 'none',

    };

    const circleStyleRed = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue', 
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        boxShadow: isRedActive && !isYellowActive && !isGreenActive ? '0px 0px 9px 4px red' : 'none',
        boxShadow: isRedActive && !isYellowActive && !isGreenActive ? '0px 0px 30px 20px rgba(255, 0, 0, 0.6)' : 'none',
        animation: isRedActive && !isYellowActive && !isGreenActive ? 'glow 0.8s linear infinite alternate' : 'none',
      };

      const circleStyleYellow = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue', 
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        boxShadow: isYellowActive && !isGreenActive && !isRedActive ? '0px 0px 9px 4px yellow' : 'none',
        boxShadow: isYellowActive && !isGreenActive && !isRedActive? '0px 0px 30px 20px rgba(255, 255, 0, 0.6)' : 'none',
        animation: isYellowActive && !isGreenActive && !isRedActive? 'glow 0.8s linear infinite alternate' : 'none',
      };

    const lightingGreen = () => {
        setGreenIsActive(true);
        setYellowIsActive(false);
        setRedIsActive(false);
    }

    const lightingRed = () => {
        setRedIsActive(true);
        setGreenIsActive(false);
        setYellowIsActive(false);
    }

    const lightingYellow = () => {
        setYellowIsActive(true);
        setGreenIsActive(false);
        setRedIsActive(false);
    }

    return (
        <div>
            <button onClick={lightingRed} className=" btn m-2" style={circleStyleRed}></button>
            <button onClick={lightingYellow} className=" btn m-2" style={circleStyleYellow}></button>
            <button onClick={lightingGreen} className=" btn m-2" style={circleStyleGreen}> </button> 
        </div>
    
    )
}