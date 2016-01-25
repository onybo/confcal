import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import {fromJS} from 'immutable';
import * as reducers from '../reducers';
import data from '../data/conferences';

declare var module;

const reducer = combineReducers(reducers);
const state = fromJS({conferences: data.map(item => Object.assign(item, {key: item.id})), testing: true});
const store = reducer(state);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(<() => void>nextReducer);
  });
}

export default createStore(reducer, store);