import React from "react";

const List = props => {
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
