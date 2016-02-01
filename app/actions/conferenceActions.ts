import * as types from '../constants/ActionTypes';
import Firebase from 'firebase';

const dbRef = new Firebase("https://confcal.firebaseio.com/");

const conferencesLoaded = (conferences) => 
  ( { type: types.CONFERENCES_LOADED, conferences} );


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
    dbRef.child("conferences").once("value", 
        snapshot => {
          console.dir(snapshot.val());
          dispatch(conferencesLoaded(snapshot.val()));
        },
        error => console.dir(error)
    );
    return { type: types.LOADING_CONFERENCES };
  };     


export const addConferenceDialogOpen = () => 
  ( { type: types.ADD_CONFERENCE_DIALOG, open: true} );

export const addConferenceDialogClose = () => 
  ( { type: types.ADD_CONFERENCE_DIALOG, open: false} );

export const addConferenceFieldChanged = (field, value) => 
  ({ type: types.ADD_CONFERENCE_DIALOG_FIELD_CHANGED, field, value});

export const submitNewConference = () => 
  ( { type: types.SUBMIT_NEW_CONFERENCE } );
