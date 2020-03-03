import React from "react";

const CurrentLocation = props => {
	return (
		<div className="container">
			{props.weather.city && (
				<ul>
					<li>{props.weather.temp}</li>
					<li>
						{props.weather.city}, {props.weather.country}
					</li>
					<li>{props.weather.weather}</li>
				</ul>
			)}
			<p>{props.weather.error}</p>
		</div>
	);
};

export default CurrentLocation;
