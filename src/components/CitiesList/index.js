import React from "react";
import "./style.css";

const CitiesList = props => {
	const articleElements = props.listSaveCity.map((city, index) => {
		return (
			<li
				key={index}
				className="sities__item"
				onClick={() => {
					props.select_city(city.city);
				}}
			>
				<div className="card">
					<div className="card__header">
						{city.city}, {city.country}
					</div>
					<div className="card__body">
						Temp today {Math.round(city.temp)} {props.degrees_icon}
					</div>
				</div>
			</li>
		);
	});
	return (
		<ul className="cities__list" style={{ listStyle: "none" }}>
			{articleElements}
		</ul>
	);
};

export default CitiesList;
