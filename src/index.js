import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import nameReducer from './reducers/nameReducer';
import wishReducer from './reducers/wishReducer';

const masterReducer = combineReducers({
    name: nameReducer,
    wish: wishReducer
})

//create storage and pass the reduder
//+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() is for redux chrome extension
//to give the permission of accesssing central storage

//without middleware 
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//without enabling devtools
//const store = createStore(reducer, applyMiddleware(thunk));

//with devtool
const composeEnhacers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(masterReducer,{name:'Ramesh',wish:['eat', 'sleep']}, composeEnhacers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
