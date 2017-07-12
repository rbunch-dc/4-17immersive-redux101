import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// Go get the createStore method from the redux module
// We also need applyMiddleware from redux if we are going to use middleware
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// import the Provider from react-redux so react and redux can talk!
import { Provider } from 'react-redux';

// import the rootReducer so we can give it to the store... fill those shelves!!
import RootReducer from './reducers/rootReducer'

// const theStore = createStore(RootReducer);
console.log(theStore)
// Make a store that uses middleware
// applyMiddleware takes an arg (all the middleware to be used)...
// which returns a function that takes one 1 arg, createStore

// One line store with middleware...
// const woah = applyMiddleware(reduxPromise)(createStore)(RootReducer)

// 2 line store with middleware...
// const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)
// const theFinalStore = createStoreWithMiddleWare(RootReducer)

// Least confusion? 3 lines...
const middleWare = applyMiddleware(reduxPromise);
const storePrep = middleWare(createStore);
const theStore = storePrep(RootReducer)


// ReactDOM.render takes 2 args... 1. What, 2. Where
// <Provider store={theStore}> --- without middleware
ReactDOM.render(
	<Provider store={theStore}>
		<div className="app">
			<App />
		</div>
	</Provider>, 
	document.getElementById('root')
);

