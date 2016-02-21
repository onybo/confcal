import * as React from 'react'; 
import Moment from '../moment-ext';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import {Flag} from './flags/Index';

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
  tickets: string;
}

const endAsString = (start, end) => (
   start.month() === end.month() ?  
    end.format('D') : 
    end.format('MMMM D')
)

const Conference = (props:ConferenceProps) => {
  const start = Moment(props.start).format('MMMM D');

  const ConferenceDetailField = (props) => (
      <TextField
          floatingLabelText={props.label}
          id={props.label.toLowerCase()}
          value={props.value}
          disabled={true}
          underlineStyle={{borderBottomStyle: 'solid', borderBottomWidth: '1px'}}
          inputStyle={{color: Colors.black}}
          style={{marginRight: '20px'}}
      />        
  )
  
  return (
    <Card initiallyExpanded={false} >
        <CardHeader
          title={props.title}
          subtitle={`${start}-${endAsString(Moment(props.start), Moment(props.end))}`}
          actAsExpander={true}
          showExpandableButton={true} textStyle={{minWidth: '200px'}}
          style={{background: '#eef3f6' }}> 
          <IconButton style={{float: 'right', marginRight: '30px'}}>
            <Flag country={props.country} />
          </IconButton> 
        </CardHeader>
        <CardText expandable={true} >
          
          <ConferenceDetailField label='Venue' value={props.venue}  />
          <ConferenceDetailField label='City' value={props.city} />
          <ConferenceDetailField label='Country' value={props.country} />
                    
          <div style={{marginTop: '20px'}}>
            {props.description}
          </div>
          
        </CardText> 
        <CardActions expandable={true}>
          <FlatButton label="Goto conference web site" linkButton={true} href={props.url} secondary={true}/>
        </CardActions>
    </Card>
);
}

export default Conference;