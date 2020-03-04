import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">
					<NavLink
						activeStyle={{
							opacity: 1
						}}
						className="navigation__link"
						to="/home"
					>
						home
					</NavLink>
				</li>
				<li className="navigation__item" onClick={props.getting_weather_week}>
					<NavLink
						activeStyle={{
							opacity: 1
						}}
						className="navigation__link"
						to={`/today/${props.selected_city.city}`}
					>
						Today
					</NavLink>
				</li>
				<li className="navigation__item" onClick={props.getting_weather_week}>
					<NavLink
						activeStyle={{
							opacity: 1
						}}
						className="navigation__link"
						to={`/tomorrow/${props.selected_city.city}`}
					>
						Tomorrow
					</NavLink>
				</li>
				<li className="navigation__item" onClick={props.getting_weather_week}>
					<NavLink
						activeStyle={{
							opacity: 1
						}}
						className="navigation__link"
						to={`/week/${props.selected_city.city}`}
					>
						Week
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
