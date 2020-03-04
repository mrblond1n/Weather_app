import React from "react";
import WeekList from "./OutputInfo/WeekList";

const CityWeek = props => {
	return (
		<div className="wrapper__inside">
			<h3>Week</h3>
			<WeekList list_to_week={props.list_to_week} days={"week"} />
		</div>
	);
};

export default CityWeek;
