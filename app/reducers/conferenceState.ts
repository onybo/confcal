import * as types from '../constants/ActionTypes';

import { createReducer } from 'redux-immutablejs';
import {Map, OrderedMap} from 'immutable';
const initialState = Map({
    conferences: OrderedMap(<any>{}),
    loading: false
  });

export default function conferenceState(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case types.LOADING_CONFERENCES:
			return state.merge({loading: true});;

		case types.CONFERENCE_LOADED:
      const newState = state.setIn(['conferences', action.key], action.conference)
      return newState.merge({
        loading: false
      });
		default:
			return state;
	}
}