import * as types from '../constants/ActionTypes';
import Firebase from 'firebase';


const conferencesLoaded = (conferences) => {
  return { type: types.CONFERENCES_LOADED, conferences};
}

export const loadConferences = () => {
  console.log('loadConferences');
	return (dispatch, getState) => {
    console.log('inside dispatch');
    var ref = new Firebase("https://confcal.firebaseio.com/");
    // let newref = ref.push();
    // console.dir(newref.key());
    // newref.set({foo: 'bar'});
    ref.child("conferences").once("value", 
        snapshot => {
          console.dir(snapshot.val());
          dispatch(conferencesLoaded(snapshot.val()));
        },
        error => console.dir(error)
    );
    return { type: types.LOADING_CONFERENCES };
  };     
}