import React from "react";
import "./style.css";

const SearchForm = props => {
	return (
		<form onSubmit={props.getting_weather_input}>
			{" "}
			<input
				type="text"
				id="search_city"
				name="city"
				placeholder="find city..."
			/>{" "}
			<button>получить погоду</button>
		</form>
	);
};

export default SearchForm;
