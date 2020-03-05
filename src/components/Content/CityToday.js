import React from "react";
import WeekList from "./OutputInfo/WeekList";
import Maps from "../Maps/Maps";

const CityToday = props => {
	const date = `${new Date().toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate()}`;
	return (
		<div className="wrapper wrapper--row">
			<div>
				<h3 className="section__title">Today</h3>
				<h5 className="section__subtitle">{date}</h5>
				<WeekList {...props} days={"today"} />
			</div>
			<div>
				<Maps {...props} />
			</div>
		</div>
	);
};

export default CityToday;
