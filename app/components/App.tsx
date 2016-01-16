import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import data from '../data/conferences';

import {default as ConferenceList} from './ConferenceList';
 
export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (<ConferenceList conferences={data} />);
	}
}