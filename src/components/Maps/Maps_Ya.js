import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const SimpleMap = props => {
	return (
		<YMaps>
			{/* <div style={{ width: "100%" }}> */}
			<Map
				height={300}
				width={"100%"}
				state={{
					center: [
						props.selected_city.coord.lat,
						props.selected_city.coord.lon
					],
					zoom: 9
				}}
				defaultState={{
					center: [
						props.selected_city.coord.lat,
						props.selected_city.coord.lon
					],
					zoom: 9
				}}
			>
				<Placemark
					onDragend={e => {
						props.getting_weather({
							lat: Object.values(e)[0].target.geometry._coordinates[0],
							lon: Object.values(e)[0].target.geometry._coordinates[1]
						});
					}}
					geometry={[
						props.selected_city.coord.lat,
						props.selected_city.coord.lon
					]}
					options={{
						draggable: true
					}}
					properties={{
						hintContent: `${props.selected_city.city}`,
						balloonContent: `${props.selected_city.city}, ${
							props.selected_city.country
						}
               - now ${Math.round(props.selected_city.temp)} 
               degrees ${
									props.selected_city.temp > 0 ? "above zero" : "below zero"
								}`
					}}
					modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
				/>
			</Map>
			{/* </div> */}
		</YMaps>
	);
};

export default SimpleMap;
