import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import InfoWindow from "./InfoWindow";

const API_KEY_MAPS = "AIzaSyDIe2CpxakJkTlCXvesr3QJAT_rjGcDLcM";

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 10
	};

	render() {
		if (!this.props.selected_city.city) return null;

		let center = {
			lat: this.props.selected_city.coord.lat,
			lng: this.props.selected_city.coord.lon
		};

		return (
			// Important! Always set the container height explicitly
			<div style={{ height: "300px", width: "600px" }}>
				<GoogleMapReact
					// yesIWantToUseGoogleMapApiInternals
					bootstrapURLKeys={{ key: API_KEY_MAPS }}
					defaultCenter={this.props.center}
					center={center}
					defaultZoom={this.props.zoom}
					onClick={this.props.on_click_marker}
				>
					<Marker
						lat={center.lat}
						lng={center.lng}
						on_click_marker={this.props.on_click_marker}
					/>
					<InfoWindow
						lat={center.lat}
						lng={center.lng}
						show={this.props.show_info}
						// selected_city={this.props.selected_city}
						{...this.props}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
