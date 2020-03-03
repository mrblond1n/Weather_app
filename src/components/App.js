import React, { PureComponent } from "react";
import Header from "./Header";
import CurrentLocation from "./CurrentLocation/CurrentLocation";
import CitiesList from "./CitiesList";

const API_KEY = "43d829730c7ea38b646a9f6ff087c53d";
// const url =
// 	"http://api.openweathermap.org/data/2.5/forecast?q=moscow&appid=43d829730c7ea38b646a9f6ff087c53d";
// const currentCity = "Moscow";

class App extends PureComponent {
	state = {
		listSaveCity: [],
		currentLocation: {
			temp: undefined,
			city: undefined,
			country: undefined,
			weather: undefined,
			error: undefined
		}
	};

	getting_weather = async e => {
		e.preventDefault();

		const city = e.target.elements.city.value;
		if (!city) {
			this.setState({
				currentLocation: {
					temp: undefined,
					city: undefined,
					country: undefined,
					weather: undefined,
					error: "Insert city name"
				}
			});
			return;
		}

		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);

				this.setState({
					currentLocation: {
						temp: data.main.temp,
						city: data.name,
						country: data.sys.country,
						weather: data.weather[0].main,
						error: undefined
					}
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="container">
				<Header getting_weather={this.getting_weather} />
				<CurrentLocation weather={this.state.currentLocation} />
				<CitiesList />
				<div className="jumbotron text-center">
					<h1 className="display-3"> App name </h1>
				</div>
			</div>
		);
	}
}

export default App;
