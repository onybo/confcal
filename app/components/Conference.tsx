import * as React from 'react'; 
import Moment from '../moment-ext';

export interface ConferenceProps {
  title: string;
  start: Date;
  end: Date;
  venue: string;
  city: string;
  country: string;
  url: string;
  description: string; 
}

export default class Conference extends React.Component<ConferenceProps, any> {
	constructor(props: ConferenceProps) {
    super(props);
  }
	render() {
    // var propValue;
    // for(var propName in moment){
    //   propValue = moment[propName];
    //   console.log(propName, propValue);
    // }
    const start = Moment(this.props.start).format('MMMM D');
    const end = Moment(this.props.end).format('D');
		return <div>
			<strong> {this.props.title} </strong>
      <div> {`${start}-${end}`} </div>
		</div>;
	}
}