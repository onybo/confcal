import * as types from '../constants/ActionTypes';

import {Map} from 'immutable';
import * as Moment from 'moment';

const initialState = Map<string, any>({
    conference: Map<string, any>(<any>{}),
    open: false,
    adding: false
  });

const updateStart = (state: Map<string, any>, start: moment.Moment , end: Date) => {
  const endM = end === null || end === undefined || start.isAfter(end) ? start : Moment.default(end);
   
  return state.setIn(['conference', 'start'], start.toDate())
              .setIn(['conference', 'end'], endM.toDate());
}

export default function addConferenceState(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case types.ADDING_CONFERENCE:
			return state.merge(Map({adding: true}));;

		case types.CONFERENCES_ADDED:
      return state.merge(Map({
        conference: Map(action.conference),
        adding: false
      }));
    
    case types.ADD_CONFERENCE_DIALOG:
      return state.merge({        
        open: action.open,
        conference: Map({
          verified: false
        })
      });
    
    case types.ADD_CONFERENCE_DIALOG_FIELD_CHANGED:
      return state.setIn(['conference', action.field], action.value);  
    
    case types.ADD_CONFERENCE_DIALOG_START_CHANGED:
      return updateStart(state, Moment.default(action.start), state.getIn(['conference', 'end']));
            
		default:
			return state;
	}
}