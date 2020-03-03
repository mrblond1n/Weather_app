import React from "react";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";
import "./style.css";

const Header = props => {
	return (
		<header className="header">
			<Navigation />
			<SearchForm getting_weather={props.getting_weather} />
		</header>
	);
};

export default Header;
