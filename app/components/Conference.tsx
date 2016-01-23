import * as React from 'react'; 
import Moment from '../moment-ext';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export interface ConferenceProps {
  key: number;
  title: string;
  start: Date;
  end: Date;
  venue: string;
  city: string;
  country: string;
  url: string;
  description: string; 
}

const Conference = (props:ConferenceProps) => {
  const start = Moment(props.start).format('MMMM D');
  const end = Moment(props.end).format('D');
  return (
    <Card initiallyExpanded={false}>
        <CardHeader
          title={props.title}
          subtitle={`${start}-${end}`}
          actAsExpander={true}
          showExpandableButton={true} />
        <CardText expandable={true}>
          {props.description}
        </CardText> 
        <CardActions expandable={true}>
          <FlatButton label="Action1"/>
        </CardActions>
    </Card>
);
}

export default Conference;