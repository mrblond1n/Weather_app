import React from "react";
// import "./style.css";

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
		return (
			<div className="card" key={index}>
				<div className="card__header">
					{new Date(item.date).toLocaleDateString("en", {
						month: "long"
					})}
					, {new Date(item.date).getDate()}
				</div>
				<div>
					Night: {Math.round(item.weather[0].temp)},{" "}
					{item.weather[0].description}
				</div>
				<div>
					Day:{" "}
					{Math.round(item.weather[Math.round(item.weather.length / 2)].temp)},{" "}
					{item.weather[Math.round(item.weather.length / 2)].description}
				</div>
			</div>
		);
	});
};

export default Cards;
