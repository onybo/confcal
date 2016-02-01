import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header';
import ConferenceList from './ConferenceList';
import * as conferenceActions from '../actions/conferenceActions';
 
export class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (
      <div>
        <Header />
        <div style={{margin: '72px'}}>
          <ConferenceList 
            conferences={this.props.conferences.toArray()}
            addConference={this.props.addConference} 
            actions={this.props.actions} />
        </div>
      </div>
    );
	}
}

function mapStateToProps(state) {
  console.dir(state.toJS());
  return {    
    conferences: state
                  .getIn(['conferenceState', 'conferences'])
                  .mapEntries(([k,item]) => [k, Object.assign({}, item, {key: k})]),
    addConference: state.get('addConferenceState')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(conferenceActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);