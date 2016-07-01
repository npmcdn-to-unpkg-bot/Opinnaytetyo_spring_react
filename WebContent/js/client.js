import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";

import Layout from "./components/Layout";
import Gists from "./components/Gists";
import Gist from "./components/Gist";

const application = document.getElementById('container');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Gists} />
			<Route path="single" component={Gist} />
		</Route>
	</Router>,	
	application
);