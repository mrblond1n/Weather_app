import React from "react";
import WeekList from "./OutputInfo/WeekList";

const CityToday = props => {
	const date = `${new Date().toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate()}`;
	return (
		<div className="wrapper wrapper--row">
			<div>
				<h3 className="section__title">Today</h3>
				<h5 className="section__subtitle">{date}</h5>
				<WeekList list_to_week={props.list_to_week} days={"today"} />
			</div>
			<div>map</div>
		</div>
	);
};

export default CityToday;
