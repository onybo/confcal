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
        		<Conference title={conference.title} 
                        start={conference.start}
                        end={conference.end}
                        venue={conference.venue}
                        city={conference.city}
                        country={conference.country}
                        url={conference.url}
                        description={conference.description}/>
      		);
    	});
		
		return (<div>{conferences}</div>);
	}
}