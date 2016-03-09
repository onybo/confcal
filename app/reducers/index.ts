import { combineReducers } from 'redux-immutablejs';
import conferenceState from './conferenceState';
import addConferenceState from './addConferenceState';

const rootReducer = combineReducers({
  conferenceState,
  addConferenceState
})

export default rootReducer