import React from "react";
import "./style.css";

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href="/today">Today</a>
				</li>
				<li>
					<a href="/tomorrow">Tomorrow</a>
				</li>
				<li>
					<a href="/week">Week</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
