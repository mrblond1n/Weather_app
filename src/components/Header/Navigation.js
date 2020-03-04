import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navigation = props => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/home">home</Link>
				</li>
				<li onClick={props.getting_weather_week}>
					<Link to={`/today/${props.selected_city.city}`}>Today</Link>
				</li>
				<li onClick={props.getting_weather_week}>
					<Link to={`/tomorrow/${props.selected_city.city}`}>Tomorrow</Link>
				</li>
				<li onClick={props.getting_weather_week}>
					<Link to={`/week/${props.selected_city.city}`}>Week</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
