import React, { useState } from "react";

export const RedCircle = () => {
  const [isActive, setActive] = useState(false)

    const circleStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue', // Change this to any color you prefer
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      };
    
    

    return <div onClick={lighting} className="m-2" style={circleStyle}></div>;    
}
