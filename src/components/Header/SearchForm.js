import React from "react";

const SearchForm = props => {
	return (
		<form className="form__search" onSubmit={props.getting_weather_input}>
			{" "}
			<input
				className="form__input"
				type="text"
				id="search_city"
				name="city"
				placeholder="find city..."
			/>{" "}
			<button className="button button--green">get info</button>
		</form>
	);
};

export default SearchForm;
