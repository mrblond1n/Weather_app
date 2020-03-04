import React from "react";
import WeekList from "./WeekList";

const CityWeek = props => {
	return (
		<div>
			<h1>Week</h1>
			<WeekList list_to_week={props.list_to_week} days={"week"} />
		</div>
	);
};

export default CityWeek;
