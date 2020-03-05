import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const SimpleMap = props => {
	return (
		<YMaps>
			<Map
				height={300}
				width={600}
				defaultState={{
					center: [
						props.selected_city.coord.lat,
						props.selected_city.coord.lon
					],
					zoom: 9
				}}
			>
				<Placemark
					geometry={[
						props.selected_city.coord.lat,
						props.selected_city.coord.lon
					]}
					properties={{
						hintContent: "Собственный значок метки",
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
		</YMaps>
	);
};

export default SimpleMap;
