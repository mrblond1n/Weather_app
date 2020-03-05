import React from "react";
import List from "./List";
import Cards from "./Cards";

const CityToday = props => {
	let arr = [];

	props.list_to_week.map(item => {
		let date_start = new Date().getDate();
		let date_finish = new Date().getDate();
		let days = 0;
		let dt_txt = +item.dt_txt
			.split(" ")[0]
			.split("-")
			.reverse()[0];

		switch (props.days) {
			case "today":
				days = 0;
				break;
			case "tomorrow":
				days = 1;
				date_start += 1;
				break;
			case "week":
				days = 5;
				break;

			default:
				days = 0;
				break;
		}
		if (dt_txt >= +date_start && dt_txt <= +date_finish + +days) {
			let obj = {
				date: undefined,
				weather: { temp: undefined, description: undefined, wind: undefined }
			};
			obj.date = item.dt_txt;
			obj.weather.temp = item.main.temp;
			obj.weather.description = item.weather[0].main;
			obj.weather.wind = item.wind.speed;

			return arr.push(obj);
		} else {
			return null;
		}
	});
	if (props.days === "today" || props.days === "tomorrow") {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Time</th>
							<th>Weather</th>
						</tr>
					</thead>
					<tbody>
						<List list={arr} degrees_icon={props.degrees_icon} />
					</tbody>
				</table>
			</div>
		);
	} else {
		return (
			<div className="card__container">
				{" "}
				<Cards list={arr} degrees_icon={props.degrees_icon} />
			</div>
		);
	}
};

export default CityToday;
