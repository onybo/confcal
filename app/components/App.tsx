import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header';
import ConferenceList from './ConferenceList';
import * as conferenceActions from '../actions/conferenceActions';
 
const App = (props) => (
  <div>
    <Header />
    <div style={{margin: '72px'}}>
      <ConferenceList 
        conferences={props.conferences.toArray()}
        addConference={props.addConference} 
        actions={props.actions} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  console.dir(state.toJS());
  return {    
    conferences: state
                  .getIn(['conferenceState', 'conferences'])
                  .mapEntries(([k,item]) => [k, Object.assign({}, item, {key: k})]),
    addConference: state.get('addConferenceState')
  };
}

const mapDispatchToProps = (dispatch) => 
   ( {actions: bindActionCreators(conferenceActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);