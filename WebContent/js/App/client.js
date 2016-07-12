import ReactDOM from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';  
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import {fetchGist} from "./actions/actions";
import * as reducers from "./reducers/changeGist";
import App from "./components/presentational/App";


const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunkMiddleware));  
store.dispatch(fetchGist());
//console.log(store.getState())
//store.dispatch(asd());
console.log(store.getState())

const application = document.getElementById('container');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	application
	
);