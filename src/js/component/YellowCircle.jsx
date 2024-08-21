import React from "react";

export const YellowCircle = () => {
    const circleStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue', // Change this to any color you prefer
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      };
    
    return <div className="m-2" style={circleStyle}></div>;    
}
