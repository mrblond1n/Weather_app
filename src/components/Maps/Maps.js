import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

function test() {
	console.log("lol");
}

const AnyReactComponent = ({ text }) => (
	<div
		onClick={test}
		style={{
			background: "white",
			display: "block",
			width: "20px",
			height: "20px"
		}}
	>
		{text}
	</div>
);

const API_KEY_MAPS = "AIzaSyDIe2CpxakJkTlCXvesr3QJAT_rjGcDLcM";

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		if (!this.props.selected_city.city) return null;

		let center = {
			lat: this.props.selected_city.coord.lat,
			lng: this.props.selected_city.coord.lon
		};
		console.log(center);

		return (
			// Important! Always set the container height explicitly
			<div style={{ height: "300px", width: "600px" }}>
				<GoogleMapReact
					yesIWantToUseGoogleMapApiInternals
					bootstrapURLKeys={{ key: API_KEY_MAPS }}
					defaultCenter={this.props.center}
					center={center}
					defaultZoom={this.props.zoom}
				>
					{/* <AnyReactComponent lat={59.955413} lng={30.337844} text="Iconca" /> */}
					<AnyReactComponent
						lat={this.props.selected_city.lat}
						lng={this.props.selected_city.lon}
						text="Iconca"
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
