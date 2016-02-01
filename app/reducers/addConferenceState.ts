import {ADDING_CONFERENCE, 
  CONFERENCES_ADDED, 
  ADD_CONFERENCE_DIALOG,
  ADD_CONFERENCE_DIALOG_FIELD_CHANGED
} from '../constants/ActionTypes';

import {Map} from 'immutable';
const initialState = Map<string, any>({
    conference: Map<string, any>(<any>{}),
    open: false,
    adding: false
  });

export default function addConferenceState(state = initialState, action) {
  if (!action)
    return state;
	switch (action.type) {
		case ADDING_CONFERENCE:
			return state.merge(Map({adding: true}));;

		case CONFERENCES_ADDED:
      return state.merge(Map({
        conference: Map(action.conference),
        adding: false
      }));
    
    case ADD_CONFERENCE_DIALOG:
      return state.merge(Map({        
        open: action.open
      }));
    
    case ADD_CONFERENCE_DIALOG_FIELD_CHANGED:
      console.dir(state.get('conference').toJS());
      return state.setIn(['conference', action.field], action.value);  
      
		default:
			return state;
	}
}