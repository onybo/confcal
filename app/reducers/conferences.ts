import {LOAD_CONFERENCES, CONFERENCES_LOADED} from '../constants/ActionTypes';

import { createReducer } from 'redux-immutablejs';
import {fromJS} from 'immutable';
const initialState = fromJS({
    conferences: {},
    loading: false
  });

export default function conferences(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case LOAD_CONFERENCES:
			return state;

		case CONFERENCES_LOADED:

			return state;

		default:
			return state;
	}
}