import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLights } from "./TrafficLights.jsx";

//create your first component
const Home = () => {
	const hanger = {
        width: '20px',
        height: '100px',
    }

	return (
		<div className="text-center">
			<div className="d-flex justify-content-center">
				<div className="bg-dark" style={hanger}> </div>
			</div>
			<TrafficLights/>
		</div>
	);
};

export default Home;
