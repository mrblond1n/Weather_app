import React from "react";
import { notify } from "../Notification";

const CurrentLocation = props => {
	return (
		<div className="current-city container">
			{(props.weather.city && (
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
			)) || <div>Data is not available</div>}
			{props.weather.city && (
				<button
					className="button button--relative"
					onClick={() => {
						props.add_city(props.weather);
						notify("Saved");
					}}
				>
					{props.plus_icon}
				</button>
			)}

			<p>{props.weather.error}</p>
		</div>
	);
};

export default CurrentLocation;
