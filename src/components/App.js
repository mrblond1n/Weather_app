import React, { PureComponent } from "react";
import Header from "./Header/Header";
import CurrentLocation from "./MainSection";
import CitiesList from "./Content/SaveCityList";
import CityWeek from "./Content/CityWeek";
import CityToday from "./Content/CityToday";
import CityTomorrow from "./Content/CityTomorrow";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Notification, { notify } from "./Notification";

import { CSSTransition } from "react-transition-group";

import "./style.css";
import "./animation.css";
import "normalize.css";

const API_KEY = "43d829730c7ea38b646a9f6ff087c53d";

const routes = [
	{ path: "/home", name: "Home", Component: CitiesList },
	{ path: "/today", name: "Today", Component: CityToday },
	{ path: "/tomorrow", name: "Tomorrow", Component: CityTomorrow },
	{ path: "/week", name: "Week", Component: CityWeek }
];

class App extends PureComponent {
	state = {
		listSaveCity: [],
		currentLocation: {
			temp: undefined,
			city: undefined,
			country: undefined,
			weather: undefined,
			wind: undefined,
			coord: undefined
		},
		infoToWeek: {
			name: undefined,
			country: undefined
		},
		listWeekWeather: [],
		map: {
			show_info: false
		}
	};

	// FUNCTION

	// function when mounting app
	// data can be CITY or LAT & LON
	getting_weather = async data => {
		let url;
		// let currentCity = "moscow";
		if (data.city) {
			url = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${API_KEY}&units=metric`;
		} else {
			url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}&units=metric`;
		}

		await fetch(url)
			.then(res => res.json())
			.then(data => {
				if (data.cod !== 200) {
					notify(`Sorry, but ${data.message}`);
					return;
				}
				this.setState({
					currentLocation: {
						temp: data.main.temp,
						city: data.name,
						country: data.sys.country,
						weather: data.weather[0].main,
						wind: data.wind.speed,
						coord: data.coord
					}
				});
				// получаем данные на неделю
				this.getting_weather_week();
			})
			.catch(err => {
				console.log(err);
			});
	};
	getting_weather_input = async e => {
		let city;
		e.preventDefault();
		city = e.target.elements.city.value;
		if (!city) {
			notify("Nothing search");
		}

		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(data => {
				if (data.cod !== 200) {
					notify(`Sorry, but ${data.message}`);
					return;
				}
				this.setState({
					currentLocation: {
						temp: data.main.temp,
						city: data.name,
						country: data.sys.country,
						weather: data.weather[0].main,
						wind: data.wind.speed,
						coord: data.coord
					}
				});
				// If is OK > get week info of city
				this.getting_weather_week();
			})
			.catch(err => {
				console.log(err);
			});
	};
	getting_weather_week = async () => {
		if (!this.state.currentLocation.city) return;
		if (
			this.state.infoToWeek.name &&
			this.state.currentLocation.city.toLowerCase() ===
				this.state.infoToWeek.name.toLowerCase()
		) {
			// Already we have data, no need make request for data again...
			return;
		}

		await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentLocation.city}&appid=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(data => {
				let newArr = [];

				for (let i in data.list) {
					newArr.push(data.list[i]);
				}
				this.setState({
					infoToWeek: {
						name: data.city.name,
						country: data.city.coutry
					},
					listWeekWeather: newArr
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	// handlers
	select_city = (e, city) => {
		e.stopPropagation();
		this.getting_weather({ city: city });
	};
	add_city = city => {
		this.setState(prevState => ({
			listSaveCity: [...prevState.listSaveCity, city]
		}));
	};
	on_click_marker = () => {
		this.setState({
			map: { show_info: !this.state.map.show_info }
		});
	};
	// remove_city = index => {
	// 	let arr = this.state.listSaveCity;
	// 	arr.splice(index, 1);
	// 	this.setState({
	// 		listSaveCity: arr
	// 	});
	// 	console.log(index);
	// };

	// main function for  get geoloc data user
	geoSuccess = position => {
		this.getting_weather({
			lat: position.coords.latitude,
			lon: position.coords.longitude
		});
	};

	// START APP HERE
	UNSAFE_componentWillMount() {
		if (window.location.pathname === "/home") {
			let geoOptions = {
				timeout: 10 * 1000
			};
			let geoError = function(error) {
				console.log("Error occurred. Error code: " + error.code);
			};

			// get geo user`s data
			navigator.geolocation.getCurrentPosition(
				this.geoSuccess,
				geoError,
				geoOptions
			);
		} else {
			this.getting_weather({
				city: window.location.pathname.split("/").reverse()[0]
			});
		}
	}

	render() {
		// redirect to /home
		if (window.location.pathname === "/") {
			return (
				<BrowserRouter>
					<Route path="/">
						<Redirect to="/home" />;
					</Route>
				</BrowserRouter>
			);
		}

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
							<div className="container conitaner--border">
								<CurrentLocation
									weather={this.state.currentLocation}
									degrees_icon={degrees}
									plus_icon={plus}
									add_city={this.add_city}
								/>
							</div>
							{(this.state.infoToWeek.name && (
								<div className="container">
									{routes.map(({ path, Component }) => (
										<Route key={path} path={path}>
											{({ match }) => (
												<CSSTransition
													in={match != null}
													timeout={300}
													classNames="page"
													unmountOnExit
												>
													<div className="page">
														<Component
															listSaveCity={this.state.listSaveCity}
															info_to_week={this.state.infoToWeek}
															list_to_week={this.state.listWeekWeather}
															selected_city={this.state.currentLocation}
															on_click_marker={this.on_click_marker}
															show_info={this.state.map.show_info}
															degrees_icon={degrees}
														/>
													</div>
												</CSSTransition>
											)}
										</Route>
									))}
								</div>
							)) || <div className="container">Data is not available</div>}
							<Notification />
						</section>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
