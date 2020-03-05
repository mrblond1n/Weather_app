import React from "react";

const CitiesList = props => {
	const articleElements = props.listSaveCity.map((city, index) => {
		return (
			<li
				key={index}
				index={index}
				className="sities__item"
				onClick={e => {
					props.select_city(e, city.city);
				}}
			>
				<div className="card">
					<div className="card__header">
						{city.city}, {city.country}
					</div>
					<div className="card__body">
						Temp today {Math.round(city.temp)} {props.degrees_icon}
					</div>
					{/* <button className="button" onClick={() => props.remove_city(index)}>
						delete
					</button> */}
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
