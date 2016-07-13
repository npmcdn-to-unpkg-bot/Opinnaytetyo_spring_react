import ReactDOM from "react-dom";
import React from "react";

import { combineReducers } from 'redux';  
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { fetchGist } from "./actions/actions";
import * as reducers from "./reducers/reducers";
import App from "./components/presentational/App";


const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunkMiddleware));  
store.dispatch(fetchGist());
//console.log(store.getState())


const application = document.getElementById('container');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	application
	
);