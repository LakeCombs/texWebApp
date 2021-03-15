import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import HomePage from "./Component/HomePage/HomePage";
import "antd/dist/antd.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</Router>
	);
};

export default App;
