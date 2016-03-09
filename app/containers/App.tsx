import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import ConferenceList from '../components/ConferenceList';
import * as conferenceActions from '../actions/conferenceActions';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox';
import MenuItem from 'material-ui/lib/menus/menu-item';


class App extends React.Component<any, any> {  
  constructor(props){
    super(props);
  }

  static childContextTypes = {
      muiTheme: React.PropTypes.object
  };
      
  getChildContext() {
    return {
      muiTheme: getMuiTheme({}, {appBar: {
        textColor: '#aab3b6'
      }}),
    };
  }
      
  render(){
    const style = {
      marginRight: 32,
      marginBottom: 32,
      float: 'left',
      position: 'relative',
      zIndex: 0,
    };
    
    return (
      <div>
        <Header />
 
        <div style={{margin: '36px 250px'}}>
          <ConferenceList 
            conferences={this.props.conferences.toArray()}
            addConference={this.props.addConference} 
            actions={this.props.actions} />
        </div>
      </div>      
    );
  }  
} 

const mapStateToProps = (state) => {
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