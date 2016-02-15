import * as types from '../constants/ActionTypes';
import Firebase from 'firebase';
import * as Moment from 'moment';

const dbRef = new Firebase("https://confcal.firebaseio.com/conferences");

const conferenceLoaded = (key, conference) => 
  ( { type: types.CONFERENCE_LOADED, key, conference} );


const login = () => 
  (dispatch, getState) => { 
    dbRef.authWithOAuthPopup("google", (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        dispatch({ type: types.LOGGED_IN, authData });
      }
    });
  };  


export const loadConferences = () => 
	(dispatch, getState) => {
    dbRef.orderByChild("start").on("child_added", 
        snapshot => {
          console.dir(snapshot.val());
          dispatch(conferenceLoaded(snapshot.key(), snapshot.val()));
        },
        error => console.dir(error)
    );
    dispatch( { type: types.LOADING_CONFERENCES } );
  };     

export const addConferenceDialogOpen = () => 
  ( { type: types.ADD_CONFERENCE_DIALOG, open: true} );

export const addConferenceFieldChanged = (field, value) => 
  ({ type: types.ADD_CONFERENCE_DIALOG_FIELD_CHANGED, field, value});

export const addConferenceStartChanged = (start) => 
  ({ type: types.ADD_CONFERENCE_DIALOG_START_CHANGED, start});

export const submitNewConference = () => {
	return (dispatch, getState) => {
    let conference = getState().getIn(['addConferenceState', 'conference']).toJS();
    conference.start = Moment.default(conference.start).format('YYYY-MM-DD')
    conference.end = Moment.default(conference.end).format('YYYY-MM-DD')
    //console.dir(conference);
    dbRef.push(conference)      
    .then((ref) => ( 
        dispatch(conferenceLoaded(ref.key(), conference ))
      )  
      ,(error) => {
      console.log('failed to submit conference');
      console.dir(error);
    });
    dispatch({ type: types.ADD_CONFERENCE_DIALOG, open: false});
  }  
}
