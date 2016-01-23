import * as React from 'react'; 
import Paper from 'material-ui/lib/paper';
 
export default class Header extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (
      <Paper
        style={{
          backgroundColor: '#eef3f6', 
          boxShadow: 'none',
          color: '#008766'            
        }}> 
        <div style={{display: 'inline-block'}}>
        <img 
          src="images/novanet_stor_rgb.png" 
          width='112px' 
          height='56px' 
          alt='novanet'            
          style={{margin: '10px'}}/>
        </div>
        <h1 style={{
          display: 'inline-block',
          transform: 'translateY(-70%)',
          margin: '0px auto',
          textAlign: 'center',
          width: '75%'
        }}>Developer Conferences 2016</h1>
      </Paper>
    );
	}
}