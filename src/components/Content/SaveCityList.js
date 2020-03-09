import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function CitiesList(props) {
	return (
		<div className="wrapper">
			<h3 className="section__title">Saved cities</h3>
			<ul className="cities cities__list">
				<TransitionGroup className="cities__list" defaultValue="dsd">
					{props.listSaveCity.map((city, index) => (
						<CSSTransition key={index} timeout={500} classNames="page">
							<li
								className="cities__item"
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
						</CSSTransition>
					))}
				</TransitionGroup>
			</ul>
		</div>
	);
}

export default CitiesList;
