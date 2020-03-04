import React from "react";
import WeekList from "./OutputInfo/WeekList";

const CityToday = props => {
	const date = `${new Date().toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate()}`;
	return (
		<div className="wrapper__inside">
			<h3>Today</h3>
			<div>{date}</div>
			<WeekList list_to_week={props.list_to_week} days={"today"} />
		</div>
	);
};

export default CityToday;
