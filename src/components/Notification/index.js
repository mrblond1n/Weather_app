import React from "react";
import styled from "styled-components";
import ee from "event-emitter";

const Container = styled.div`
	background-color: #444;
	color: white;
	padding: 16px;
	position: absolute;
	top: ${props => props.top}px;
	max-width: 200px;
	margin: 0 auto;
	left: 0;
	right: 0;
	z-index: 1000;
	transition: top 0.5s ease;
	border-radius: 4px;
`;

const emitter = new ee();

export const notify = msg => {
	emitter.emit("notifications", msg);
};

const positionTop = 80;

export default class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			top: -positionTop
		};

		this.timeout = null;
		emitter.on("notifications", msg => {
			this.onShow(msg);
		});
	}

	onShow = msg => {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.setState({ top: -positionTop }, () => {
				this.timeout = setTimeout(() => {
					this.showNotification(msg);
				}, 500);
			});
		} else {
			this.showNotification(msg);
		}
	};
	showNotification = msg => {
		this.setState(
			{
				top: positionTop,
				msg: msg
			},
			() => {
				this.timeout = setTimeout(() => {
					this.setState({
						top: -positionTop,
						msg: ""
					});
				}, 3000);
			}
		);
	};

	render() {
		return (
			<React.Fragment>
				<Container top={this.state.top}> {this.state.msg} </Container>
			</React.Fragment>
		);
	}
}
