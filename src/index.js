import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

ReactDOM.render(
	<React.StrictMode>
		<App birds={birdData} extras={bonusItems} />
	</React.StrictMode>,
	document.getElementById("root")
);
