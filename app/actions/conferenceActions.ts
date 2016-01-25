import * as types from '../constants/ActionTypes';

export function loadConferences(settings) {
	return { type: types.LOAD_CONFERENCES, settings };
}

export function conferencesLoaded(settings, fieldName, value) {
	return { type: types.CONFERENCES_LOADED, settings, fieldName, value };
}