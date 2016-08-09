import { render } from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";

import { combineReducers } from 'redux';  
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { fetchUserInfo, fetchGists, fetchSelectedGist } from './actions/actions';
import * as reducers from './reducers/reducers';
import Root from './components/presentational/Root';

import PassGistsToListingPage from './components/container/PassGistsToListingPage';
import PassGistToSingle from './components/container/PassGistToSingle';
import CreateGist from './components/presentational/create/CreateGist';


import * as hooks from './hooks';


const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunkMiddleware));  
//store.dispatch(fetchUserInfo());
//store.dispatch(fetchGists());

//store.dispatch(fetchSelectedGist(state.default.activeGist));
//store.dispatch(fetchGists());
console.log(store.getState())

//setTimeout(function() {
//store.dispatch(fetchSelectedGist('6cad326836d38bd3a7ae'));
//}, 2000);

/*
setTimeout(function() {
	hooks.bootstrap(store);
}, 2000);
*/

const application = document.getElementById('container');

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Root}>
				<IndexRoute component={PassGistsToListingPage} />
				<Route path="gist/*" component={PassGistToSingle} />
				<Route path="create" component={CreateGist} />
			</Route>
		</Router>
	</Provider>,
	application
);