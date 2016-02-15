import * as React from 'react'; 
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import * as Moment from 'moment';

export interface AddConferenceDialogProps {
  open: boolean;
  actions: any;
  conference: Map<string, any>;
}

const AddConferenceDialog = (props:AddConferenceDialogProps) => {
  
  const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={props.actions.submitNewConference}
      />,
    ];
    
  const fieldChange = (event) => {
    const {id, value} = event.target;
    props.actions.addConferenceFieldChanged(id, value);
  }
  
  const startChange = (ignored, aDate) => (
    props.actions.addConferenceStartChanged(aDate)
  )
  
  const endChange = (ignored, aDate) => (
      props.actions.addConferenceFieldChanged('end', aDate) 
  )   
  
  return (
    <div>
      <Dialog
          title="Enter information about the conferences"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.actions.addConferenceDialogClose}
          bodyStyle={{overflow: 'scroll'}}
        >

          <div>          
            <TextField
              hintText="Name"
              floatingLabelText="Name of conference"
              id="title"
              value={props.conference.get('title')}
              onChange={fieldChange}            
            />          
            <TextField
              hintText="Venue"
              floatingLabelText="Conference venue"
              id="venue"
              value={props.conference.get('venue')}
              style={{marginLeft: '20px'}}
              onChange={fieldChange}
            /> 
          </div>         
          <div>          
            <TextField
              hintText="City"
              floatingLabelText="City"
              id="city"
              value={props.conference.get('city')}
              onChange={fieldChange}
            />
            <TextField
              hintText="Country"
              floatingLabelText="Country"
              id="country"
              value={props.conference.get('country')}
              style={{marginLeft: '20px'}}
              onChange={fieldChange}
            />
          </div>          
          <TextField
            hintText="Description"
            floatingLabelText="Description"
            id="description"
            value={props.conference.get('description')}
            fullWidth={true}
            style={{display: 'block'}}
            multiLine={true}
            rows={2}
            onChange={fieldChange}
          />
          <div>          
            <DatePicker 
              hintText="Start date"
              autoOk={true} 
              formatDate={(date) => Moment.default(date).format('YYYY-MM-DD')} 
              value={props.conference.get('start')}
              onChange={startChange}
              />
            <DatePicker 
              hintText="End date"
              autoOk={true} 
              formatDate={(date) => Moment.default(date).format('YYYY-MM-DD')}
              value={props.conference.get('end')}
              onChange={endChange}
              />
          </div>          
        </Dialog>
    </div>
  );
}

export default AddConferenceDialog;