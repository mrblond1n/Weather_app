import React from "react";

const CitiesList = props => {
	const articleElements = props.listSaveCity.slice(0, 12).map((city, index) => {
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
		<div className="wrapper__inside">
			<h3>Home</h3>
			<ul className="cities__list" style={{ listStyle: "none" }}>
				{articleElements}
			</ul>
		</div>
	);
};

export default CitiesList;
