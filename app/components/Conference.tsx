import * as React from 'react'; 

export interface ConferenceProps {
  name: string;
}

export default class Item extends React.Component<ConferenceProps, any> {
	constructor(props: ConferenceProps) {
    super(props);
  }
	render() {
		return <div>
			Conference name: {this.props.name}
		</div>;
	}
}