import React from "react";

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
					{/* <button onClick={e => props.remove_city(e, index)}>delete</button> */}
				</div>
			</li>
		);
	});
	return (
		<div className="wrapper">
			<h3 className="section__title">Saved cities</h3>
			<ul className="cities__list" style={{ listStyle: "none" }}>
				{articleElements}
			</ul>
		</div>
	);
};

export default CitiesList;
