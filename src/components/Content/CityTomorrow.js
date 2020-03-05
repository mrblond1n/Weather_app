import React from "react";
import WeekList from "./OutputInfo/WeekList";
import Maps from "../Maps/Maps";

const CityTomorrow = props => {
	const date = `${new Date().toLocaleDateString("en", {
		month: "long"
	})}, ${new Date().getDate() + 1}`;
	return (
		<div className="wrapper wrapper--row">
			<div>
				<h3 className="section__title">Tomorrow</h3>
				<h5 className="section__subtitle">{date}</h5>
				<WeekList days={"tomorrow"} {...props} />
			</div>
			<div>
				<Maps {...props} />
			</div>
		</div>
	);
};

export default CityTomorrow;
