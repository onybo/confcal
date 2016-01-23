import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import data from '../data/conferences';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';

import {default as ConferenceList} from './ConferenceList';
 
export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (
      <div>
        <AppBar 
          showMenuIconButton={false} 
          style={{backgroundColor: '#eef3f6', boxShadow: 'none'}}>
          <img 
            src="images/novanet_stor_rgb.png" 
            width='112px' 
            height='56px' 
            alt='novanet'            
            style={{margin: '10px'}}/>
        </AppBar>
        <div style={{margin: '72px'}}>
          <ConferenceList conferences={data.map(item => Object.assign(item, {key: item.id}))} />
        </div>
      </div>
    );
	}
}