import React from "react";
// import "./style.css";

// const CityToday = props => {
// 	return (
// 		<div className="cities__list" style={{ listStyle: "none" }}>
// 			{props.data}
// 		</div>
// 	);
// };

const CityToday = props => {
	const todayElement = props.listToday.map((date, index) => {
		return (
			<li
				key={index}
				className="today__item"
				// onClick={() => {
				// 	props.select_city(city.city);
				// }}
			>
				<div className="card">
					<div className="card__header">{index}</div>
					<div className="card__body">
						{" "}
						{date.dt_txt}
						{/* Temp today {Math.round(city.temp)} {props.degrees_icon} */}
					</div>
				</div>
			</li>
		);
	});
	return (
		<ul className="cities__list" style={{ listStyle: "none" }}>
			{todayElement}
		</ul>
	);
};

export default CityToday;
