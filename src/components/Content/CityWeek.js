import React from "react";
import WeekList from "./OutputInfo/WeekList";

const CityWeek = props => {
	let currentDate = new Date();
	const date_start = `${currentDate.toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate()}`;
	currentDate.setDate(currentDate.getDate() + 5);
	const date_finish = `${currentDate.toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate() + 5}`;

	return (
		<div className="wrapper">
			<h3 className="section__title">Week</h3>
			<h5 className="section__subtitle">
				{date_start} - {date_finish}
			</h5>
			<WeekList
				list_to_week={props.list_to_week}
				days={"week"}
				degrees_icon={props.degrees_icon}
			/>
		</div>
	);
};

export default CityWeek;
