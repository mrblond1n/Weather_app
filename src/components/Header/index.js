import React from "react";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";
import "./style.css";

const Header = props => {
	return (
		<header className="header">
			<Navigation
				selected_city={props.selected_city}
				getting_weather_week={props.getting_weather_week}
			/>
			<SearchForm getting_weather_input={props.getting_weather_input} />
		</header>
	);
};

export default Header;
