import { render } from 'react-dom';
import React from 'react';

import { combineReducers } from 'redux';  
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { fetchGists, fetchSelectedGist } from './actions/actions';
import * as reducers from './reducers/reducers';
import App from './components/presentational/App';


const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunkMiddleware));  
store.dispatch(fetchGists());
//store.dispatch(fetchSelectedGist(state.default.activeGist));
//store.dispatch(fetchGists());
console.log(store.getState())

//setTimeout(function() {
//store.dispatch(fetchSelectedGist('6cad326836d38bd3a7ae'));
//}, 2000);


const application = document.getElementById('container');

render(
	<Provider store={store}>
		<App />
	</Provider>,
	application
);