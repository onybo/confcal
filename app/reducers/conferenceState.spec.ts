import {expect} from 'chai';
import reducer from './conferenceState';
import {LOADING_CONFERENCES, CONFERENCES_LOADED} from '../constants/actionTypes';
import {Map} from 'immutable';

declare var describe;
declare var it;

describe('Conference reducer', () => {
  it('returns default state when none is provided', () => {
    let state = reducer(undefined, {});
    expect(state).to.eql(Map({
        conferences: Map({}),
        loading: false
      }));
  });
  it('loads two conferences', () => {
    let conferences = {
      K93hGKCh61z1aga34y6: {
        city: "San Fransisco",
        country: "USA",
        description: "Practical training in JavaScript..",
        end: "2016-03-10",
        start: "2016-03-08",
        title: "Fluent",
        url: "http://conferences.oreilly.com/fluent/javascript-html-us",
        venue: "San Francisco Marriott Marquis"
      }, 
      K93hNf5i8A33FSDwjZ8: {
        city: "London",
        country: "UK",
        description: "A practitioner-driven conference..",
        end: "2016-03-09",
        start: "2016-03-07",
        title: "QCon London",
        url: "http://qconlondon.com/",
        venue: "The Queen Elizabeth II Conference Centre",        
      }
    };
    let state = reducer(undefined, {type: CONFERENCES_LOADED, conferences});
    expect(state).to.eql(Map({
      conferences: Map({
        K93hGKCh61z1aga34y6: {
          city: "San Fransisco",
          country: "USA",
          description: "Practical training in JavaScript..",
          end: "2016-03-10",
          start: "2016-03-08",
          title: "Fluent",
          url: "http://conferences.oreilly.com/fluent/javascript-html-us",
          venue: "San Francisco Marriott Marquis"
        }, 
        K93hNf5i8A33FSDwjZ8: {
          city: "London",
          country: "UK",
          description: "A practitioner-driven conference..",
          end: "2016-03-09",
          start: "2016-03-07",
          title: "QCon London",
          url: "http://qconlondon.com/",
          venue: "The Queen Elizabeth II Conference Centre",        
        }          
      }),
      loading: false
    }));       
  });
  it('loading conferenes sets loading state to true', () => {
      let state = reducer(undefined, { type: LOADING_CONFERENCES });
      expect(state.get('loading')).to.equal(true);
  });     
});

