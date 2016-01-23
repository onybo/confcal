import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import data from '../data/conferences';


import Header from './Header';
import ConferenceList from './ConferenceList';
 
export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (
      <div>
        <Header />
        <div style={{margin: '72px'}}>
          <ConferenceList conferences={data.map(item => Object.assign(item, {key: item.id}))} />
        </div>
      </div>
    );
	}
}