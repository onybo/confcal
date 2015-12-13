import React  = require('react');
import ReactDOM  = require('react-dom');

export interface ConferenceProps {
  name: string;
}

export class Conference extends React.Component<ConferenceProps, any> {
	constructor(props: ConferenceProps) {
    super(props);
	console.log("constructing Conference");
  }
	render() {
		console.log("rendering Conference");
		
		return <div>
			Conference name: {this.props.name}
		</div>;
	}
}
