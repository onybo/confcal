import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunkMiddleware from 'redux-thunk';
import {Map} from 'immutable';
import * as reducers from '../reducers';
import data from '../data/conferences';

declare var module;

const reducer = combineReducers(reducers);
const state = Map({
    conferences: Map(<any>{}),
    loading: false
  });
const store = reducer(state);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(<() => void>nextReducer);
  });
}

console.dir(thunkMiddleware);
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);


export default createStoreWithMiddleware(reducer, store);