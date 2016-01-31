import {LOADING_CONFERENCES, CONFERENCES_LOADED} from '../constants/ActionTypes';

import { createReducer } from 'redux-immutablejs';
import {Map} from 'immutable';
const initialState = Map({
    conferences: Map(<any>{}),
    loading: false
  });

export default function conferenceState(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case LOADING_CONFERENCES:
			return state.merge(Map({loading: true}));;

		case CONFERENCES_LOADED:
      return state.merge(Map({
        conferences: Map(action.conferences),
        loading: false
      }));

		default:
			return state;
	}
}