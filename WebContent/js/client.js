import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";

import Layout from "./components/Layout";
import Gists from "./components/Listing/Gists";
import Gist from "./components/Gist";
import CreateGist from "./components/CreateGist/CreateGist";

const application = document.getElementById('container');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Gists}></IndexRoute>
			<Route path="gist/*" component={Gist}></Route>
			<Route path="create" component={CreateGist}></Route>		
		</Route>
	</Router>,	
	application
);