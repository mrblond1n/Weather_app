import React from "react";

const SearchForm = props => {
	return (
		<form className="form__search" onSubmit={props.getting_weather_input}>
			{" "}
			<input
				className="form__input"
				type="text"
				id="search_city"
				autoComplete="on"
				name="city"
				placeholder="find city..."
			/>{" "}
		</form>
	);
};

export default SearchForm;
