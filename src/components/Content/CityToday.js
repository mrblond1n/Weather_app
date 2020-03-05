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
				<WeekList
					list_to_week={props.list_to_week}
					days={"today"}
					degrees_icon={props.degrees_icon}
				/>
			</div>
			<div>
				<Maps
					on_click_marker={props.on_click_marker}
					selected_city={props.selected_city}
					show_info={props.show_info}
					degrees_icon={props.degrees_icon}
				/>
			</div>
		</div>
	);
};

export default CityToday;
