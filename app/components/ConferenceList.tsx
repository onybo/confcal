import * as React from 'react'; 
import {default as Conference, ConferenceProps} from './Conference';
import AddConferenceDialog from './AddConferenceDialog';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';

interface ConferenceData extends ConferenceProps{
  id: number;
}
export interface ConferenceListProps {
  conferences: ConferenceData[];
  addConference: any;
  actions: any;
}

const ConferenceList = (props: ConferenceListProps) => {
    
  const conferences = props.conferences.map((conference) => <Conference {...conference}/>);
  console.dir(props.addConference);
  
  return (
    <div>
      {conferences}
      <Paper style={{float: 'right', marginTop: '20px', marginBottom: '20px', padding: '10px'}}>
        <div>Do you know a cool conference not on the list? 
          <FlatButton label="Let us know" onTouchTap={props.actions.addConferenceDialogOpen}/>
        </div> 
        <AddConferenceDialog 
          open={props.addConference.get('open')} 
          conference={props.addConference.get('conference')}
          actions={props.actions}/>
      </Paper>
    </div>
  );
}

export default ConferenceList;