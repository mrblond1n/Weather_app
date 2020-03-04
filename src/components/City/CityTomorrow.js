import React from "react";
import WeekList from "./WeekList";

const CityTomorrow = props => {
	return (
		<div>
			<h3>Tomorrow</h3>
			<WeekList list_to_week={props.list_to_week} days={"tomorrow"} />
		</div>
	);
};

export default CityTomorrow;
