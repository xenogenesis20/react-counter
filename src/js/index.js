//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "../styles/index.scss";

import { Home } from "./component/home.js";

//render your react application
// Create an option to countdown from a given number.
let num = 0;
function setNum(number) {
	num = parseInt(number);
}
let currentState = true;
function stateHandler(state) {
	currentState = state;
}

function clearTimeout() {
	clearInterval(timer);
}

function counter() {
	num -= 1;
	let string = "00000" + num;
	let num2 = string.slice(-6);
	if (currentState) {
		timer;
	}

	ReactDOM.render(
		<Home
			number1={num2.charAt(0)}
			number2={num2.charAt(1)}
			number3={num2.charAt(2)}
			number4={num2.charAt(3)}
			number5={num2.charAt(4)}
			number6={num2.charAt(5)}
			myFunction={setNum}
			getState={stateHandler}
			pauseFunc={clearTimeout}
		/>,

		document.querySelector("#app")
	);
}
let timer = setInterval(counter, 1000);
