import * as types from '../constants/ActionTypes';

import { createReducer } from 'redux-immutablejs';
import {Map, OrderedMap, Iterable} from 'immutable';
import * as Moment from 'moment';
import initialConferences from './initialConferences';

const initialState = Map({
    conferences: OrderedMap<string, any>(<any>initialConferences),
    loading: false
  });

const byConferenceStart = (conferenceA, conferenceB):number => {
  const startA = Moment.default(conferenceA.start);
  const startB = Moment.default(conferenceB.start);
  return startA.isBefore(startB) ? -1 : (startA.isAfter(startB) ? 1 : 0);
}

export default function conferenceState(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case types.LOADING_CONFERENCES:
			return state.merge({loading: true});;

    case types.CONFERENCE_LOADED:
      const newState = OrderedMap<string, any>(state.setIn(['conferences', action.key], action.conference));      
      return newState.merge({
        conferences:  (<OrderedMap<any, any>>newState.get('conferences')).sort(byConferenceStart),
        loading: false
      });
		case types.CONFERENCES_LOADED:
      console.log("CONFERENCES_LOADED");
      const conferences = OrderedMap<string, any>(action.conferences).sort(byConferenceStart);      
      return state.merge({
        conferences:  <OrderedMap<any, any>>conferences,
        loading: false
      });
		default:
			return state;
	}
}