import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { useHistory } from 'react-router-dom';
import { Toolbar, Link, TextField, Button } from '@material-ui/core';


function Travel() {
  const history = useHistory();

  const vaccinePage = () => {
    history.push('/vaccine');
  }

  return (
    <div className="App">
    <AppBar position='fixed' style={{backgroundColor:'#FDA0A0',paddingLeft:'1%',paddingRight:'1%'}}>
      <Toolbar>
      <Link style={{margin:'5px',cursor:'pointer',color:'white'}}>About</Link>
      <Link style={{margin:'5px',cursor:'pointer',color:'white'}}>Log Out</Link>
      </Toolbar>
    </AppBar>
    <div style={{height:'650px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'60px'}}>
      <TextField style={{margin:'5px'}} helperText="Please enter your current location" id="demo-helper-text-misaligned" label="Email"/>
      <TextField style={{margin:'5px'}} helperText="Please enter your Destination" id="demo-helper-text-misaligned" label="Password" type='password'/>
      <div style={{margin:'5px'}}>
        <Button style={{backgroundColor:'#F06868',margin:'10px'}} onClick={vaccinePage}>Fetch Vaccination Data</Button>
      </div>
    </div>
    </div>
  );
}

export default Travel;
