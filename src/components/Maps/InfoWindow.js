import React from "react";

const InfoWindow = props => {
	if (props.show) {
		return (
			<div className="card card--window-info">
				<div className="card__header">{props.selected_city.city}</div>
				<div className="card__body" style={{ fontSize: "14px" }}>
					{Math.round(props.selected_city.temp)} {props.degrees_icon}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default InfoWindow;
