import React, { PureComponent } from "react";
import Header from "./Header";
import CurrentLocation from "./MainSection";
import CitiesList from "./Content/SaveCityList";
import CityWeek from "./Content/CityWeek";
import CityToday from "./Content/CityToday";
import CityTomorrow from "./Content/CityTomorrow";
import { BrowserRouter, Route } from "react-router-dom";

import "./style.css";
import "normalize.css";

const API_KEY = "43d829730c7ea38b646a9f6ff087c53d";
// const url =
// 	"http://api.openweathermap.org/data/2.5/forecast?q=moscow&appid=43d829730c7ea38b646a9f6ff087c53d";
// const currentCity = "Moscow";

class App extends PureComponent {
	state = {
		listSaveCity: [],
		currentLocation: {
			id: undefined,
			temp: undefined,
			city: undefined,
			country: undefined,
			weather: undefined,
			error: undefined
		},
		infoToWeek: {
			date_now: undefined,
			name: undefined,
			country: undefined,
			id: undefined,
			coord: {
				lat: undefined,
				lon: undefined
			}
		},
		listWeekWeather: []
	};

	getting_weather_input = async (e, currentCity = "moscow") => {
		let city;
		if (e) {
			e.preventDefault();

			city = e.target.elements.city.value;
			if (!city) {
				this.setState({
					currentLocation: {
						id: undefined,
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
						id: data.id,
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
	getting_weather = async (currentCity = "moscow") => {
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`
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
	getting_weather_week = async () => {
		let selectedCity = window.location.pathname.split("/").reverse()[0];

		if (
			this.state.infoToWeek.name &&
			selectedCity.toLowerCase() === this.state.infoToWeek.name.toLowerCase()
		) {
			console.log("данные на этот город уже загружены, повтор не нужен !");
			return;
		}

		await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				window.location.pathname.split("/").reverse()[0]
			}&appid=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(data => {
				let newArr = [];

				for (let i in data.list) {
					newArr.push(data.list[i]);
				}

				this.setState({
					infoToWeek: {
						date_now: new Date(),
						name: data.city.name,
						country: data.city.coutry,
						id: data.city.id,
						coord: {
							lat: data.city.coord.lat,
							lon: data.city.coord.lon
						}
						// list: newArr
					}
				});
				console.log(data);

				this.setState({
					listWeekWeather: newArr
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	select_city = city => {
		this.getting_weather(city);
	};

	add_city = city => {
		this.setState(prevState => ({
			listSaveCity: [...prevState.listSaveCity, city]
		}));
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
			<BrowserRouter>
				<div className="wrapper">
					<Header
						getting_weather_week={this.getting_weather_week}
						selected_city={this.state.currentLocation}
						getting_weather_input={this.getting_weather_input}
					/>
					<main className="main">
						<section>
							<CurrentLocation
								weather={this.state.currentLocation}
								degrees_icon={degrees}
								plus_icon={plus}
								add_city={this.add_city}
							/>
						</section>
						<section>
							<div className="container">
								<Route
									path="/home"
									render={props => (
										<CitiesList
											{...props}
											listSaveCity={this.state.listSaveCity}
											degrees_icon={degrees}
											select_city={this.select_city}
										/>
									)}
								/>
								<Route
									path="/today"
									render={props => (
										<CityToday
											{...props}
											// data={this.getting_weather_week()}
											info_to_week={this.state.infoToWeek}
											list_to_week={this.state.listWeekWeather}
										/>
									)}
								/>
								<Route
									path="/tomorrow"
									render={props => (
										<CityTomorrow
											{...props}
											// data={this.getting_weather_week()}
											info_to_week={this.state.infoToWeek}
											list_to_week={this.state.listWeekWeather}
										/>
									)}
								/>
								<Route
									path="/week"
									render={props => (
										<CityWeek
											{...props}
											// data={this.getting_weather_week()}
											info_to_week={this.state.infoToWeek}
											list_to_week={this.state.listWeekWeather}
										/>
									)}
								/>
							</div>
						</section>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
