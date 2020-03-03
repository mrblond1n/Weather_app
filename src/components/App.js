import React, { PureComponent } from "react";
import Header from "./Header";
import CurrentLocation from "./CurrentLocation";
import CitiesList from "./CitiesList";
import "./style.css";

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

	getting_weather = async (e, currentCity = "moscow") => {
		let city;
		if (e) {
			e.preventDefault();

			city = e.target.elements.city.value;
			if (!city) {
				this.setState({
					currentLocation: {
						temp: undefined,
						city: undefined,
						country: undefined,
						weather: undefined,
						wind: undefined,
						error: "Insert city name"
					}
				});
				return;
			}
		} else {
			city = currentCity;
		}

		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
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
						wind: data.wind.speed,
						error: undefined
					}
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	add_city = city => {
		// this.setState({
		// 	listSaveCity: this.state.listSaveCity.push(this.currentLocation)
		// });
		console.log(city);

		this.setState(prevState => ({
			listSaveCity: [...prevState.listSaveCity, city]
		}));

		console.log(this.state.listSaveCity);
	};

	UNSAFE_componentWillMount() {
		this.getting_weather();
	}
	render() {
		const degrees = (
			<svg viewBox={"0 0 24 24"}>
				<path
					fill={"currentColor"}
					d={
						"M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z"
					}
				/>
			</svg>
		);
		const plus = (
			<svg viewBox={"0 0 24 24"}>
				<path
					fill={"currentColor"}
					d={
						"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
					}
				/>
			</svg>
		);

		return (
			<div className="container">
				<Header getting_weather={this.getting_weather} />
				<main>
					<CurrentLocation
						weather={this.state.currentLocation}
						degrees_icon={degrees}
						plus_icon={plus}
						add_city={this.add_city}
					/>
					<CitiesList
						listSaveCity={this.state.listSaveCity}
						degrees_icon={degrees}
					/>
				</main>
			</div>
		);
	}
}

export default App;
