import * as React from 'react'; 
import {default as Conference, ConferenceProps as ConferenceProps} from './Conference';

export interface ConferenceListProps {
  conferences: ConferenceProps[];
}

export default class ConferenceList extends React.Component<ConferenceListProps, any> {
	constructor(props: ConferenceListProps) {
    super(props);
  } 
	render() {		
		var conferences = this.props.conferences.map(function(conference) {
      		return (
        		<Conference name={conference.name} />
      		);
    	});
		
		return (<div>{conferences}</div>);
	}
}