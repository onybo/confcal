import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import data from '../data/conferences';

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
          <ConferenceList conferences={this.props.conferences.toJS()} />
        </div>
      </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    conferences: state.get('conferences').map(item => item.merge({key: item.get('id')}))
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