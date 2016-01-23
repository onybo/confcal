import * as React from 'react'; 
import {default as Conference, ConferenceProps as ConferenceProps} from './Conference';
import RaisedButton from 'material-ui/lib/raised-button';

interface ConferenceData extends ConferenceProps{
  id: number;
}
export interface ConferenceListProps {
  conferences: ConferenceData[];
}

export default class ConferenceList extends React.Component<ConferenceListProps, any> {
	constructor(props: ConferenceListProps) {
    super(props);
  } 
	render() {		
		var conferences = this.props.conferences.map(function(conference) {
      		return (
        		<Conference {...conference}/>
      		);
    	});
		
		return (<div>
      {conferences}
      </div>);
	}
}