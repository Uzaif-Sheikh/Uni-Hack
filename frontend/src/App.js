import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Toolbar, TextField, Button } from '@material-ui/core';
import React from 'react';

class App extends React.Component {

	render () {
		return (
			<div className="App">



					<div style={{ height: '650px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
						<TextField style={{ margin: '5px' }} helperText="Please enter your email" id="demo-helper-text-misaligned" label="Email" />
						<TextField style={{ margin: '5px' }} helperText="Please enter your password" id="demo-helper-text-misaligned" label="Password" type='password' />
						<div style={{ margin: '5px' }}>
							<Button style={{ backgroundColor: '#F06868', margin: '10px' }}>Log in</Button>
							<Button style={{ backgroundColor: '#F06868', margin: '10px' }} >Sign up</Button>
						</div>
					</div>

			</div>
		);
	}
}

export default App;
