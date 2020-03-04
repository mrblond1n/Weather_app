import React from "react";

const CurrentLocation = props => {
	return (
		<div className="current-city container">
			{props.weather.city && (
				<ul className="current-city__list">
					<li className="current-city__item">
						{Math.round(Number(props.weather.temp))} {props.degrees_icon}
					</li>
					<li className="current-city__item">
						{props.weather.city}, {props.weather.country}
					</li>
					<li className="current-city__item">
						{props.weather.weather}, wind - {props.weather.wind} m/s
					</li>
				</ul>
			)}
			<button
				className="add-button"
				onClick={() => {
					props.add_city(props.weather);
				}}
			>
				{props.plus_icon}
			</button>
			<p>{props.weather.error}</p>
		</div>
	);
};

export default CurrentLocation;
