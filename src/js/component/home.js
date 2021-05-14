import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component
// Create an option to countdown from a given number.
// Create stop, reset, and resume functionality
// Create an alert when the user reaches a specified time, ie the user enters "10", an alert should render notifying the user that their time was reached
export function Home(props) {
	const [userNumber, setUserNumber] = useState(0);
	const [running, setRunning] = useState(true);

	return (
		<>
			<button
				className="btn btn-danger"
				onClick={() => {
					props.setRun();
				}}>
				stop / resume
			</button>
			<button
				className="btn btn-warning"
				onClick={() => {
					setUserNumber(0);
					props.myFunction(userNumber);
				}}>
				Reset
			</button>
			<button
				className="btn btn-success"
				onClick={() => {
					props.myFunction(userNumber);
				}}>
				set num
			</button>
			<input
				className="form-control"
				type="number"
				placeholder="pick a 6 digit number"
				onChange={e => {
					setUserNumber(e.target.value);
				}}
			/>
			<div className="container d-flex">
				<div>{props.number1}</div>
				<div>{props.number2}</div>
				<div>{props.number3}</div>
				<div>{props.number4}</div>
				<div>{props.number5}</div>
				<div>{props.number6}</div>
			</div>
		</>
	);
}

Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string,
	myFunction: PropTypes.func,
	setRun: PropTypes.func,
	isRunning: PropTypes.bool
};
