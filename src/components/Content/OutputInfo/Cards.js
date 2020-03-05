import React from "react";

const Cards = props => {
	let groups = [];

	for (let element of props.list) {
		let existingGroups = groups.filter(
			group => group.date.split(" ")[0] === element.date.split(" ")[0]
		);
		if (existingGroups.length > 0) {
			existingGroups[0].weather.push(element.weather);
		} else {
			let newGroup = {
				date: element.date.split(" ")[0],
				weather: [element.weather]
			};
			groups.push(newGroup);
		}
	}

	return groups.map((item, index) => {
		let i = Math.round(item.weather.length / 2);
		let current_index;
		switch (i) {
			case 1:
				current_index = 0;
				break;

			default:
				current_index = i;
				break;
		}

		return (
			<div className="card" key={index}>
				<div className="card__header">
					{new Date(item.date).toLocaleDateString("en", {
						month: "long"
					})}
					, {new Date(item.date).getDate()}
				</div>
				<div className="card__body card__body--column">
					<div>
						Night: {Math.round(item.weather[0].temp)} {props.degrees_icon},
						{item.weather[0].description}
					</div>
					<div>
						Day: {Math.round(item.weather[current_index].temp)}{" "}
						{props.degrees_icon},{item.weather[current_index].description}
					</div>
				</div>
			</div>
		);
	});
};

export default Cards;
