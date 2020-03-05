import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
	{ path: "/", name: "Home" },
	{ path: "/today", name: "Today" },
	{ path: "/tomorrow", name: "Tomorrow" },
	{ path: "/week", name: "Week" }
];

function Navigation(props) {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{routes.map(route => (
					<li key={route.path} className="navigation__item">
						<NavLink
							className="navigation__link"
							activeStyle={{ opacity: 1 }}
							key={route.path}
							to={
								route.path === "/"
									? route.path
									: `${route.path}/${props.selected_city.city}`
							}
							activeClassName="active"
							exact
						>
							{route.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
