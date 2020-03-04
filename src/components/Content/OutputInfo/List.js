import React from "react";
// import "./style.css";

const List = props => {
	console.log(props);

	return props.list.map((item, index) => {
		return (
			<tr key={index}>
				<td>
					{item.date
						.split(" ")[1]
						.split(":")
						.splice(0, 2)
						.join(":")}
				</td>
				<td>
					{item.weather.temp} {item.weather.description}, Wind -{" "}
					{item.weather.wind} meter per second
				</td>
			</tr>
		);
	});
};

export default List;
