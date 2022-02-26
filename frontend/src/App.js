import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toolbar, TextField, Button } from '@material-ui/core';

function App() {

	const sign_up = () => {

	}

	return (
		<div className="App">
			<Router>
				<AppBar position='fixed' style={{ backgroundColor: '#FDA0A0', paddingLeft: '1%', paddingRight: '1%' }}>
					<Toolbar>
						
						<Link style={{ margin: '5px', cursor: 'pointer', color: 'white' }}>About</Link>
						<Link style={{ margin: '5px', cursor: 'pointer', color: 'white' }}>Log Out</Link>
					</Toolbar>
				</AppBar>

				<Switch>
					<Route exact path="/">
						<div style={{ height: '650px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
							<TextField style={{ margin: '5px' }} helperText="Please enter your email" id="demo-helper-text-misaligned" label="Email" />
							<TextField style={{ margin: '5px' }} helperText="Please enter your password" id="demo-helper-text-misaligned" label="Password" type='password' />
							<div style={{ margin: '5px' }}>
								<Button style={{ backgroundColor: '#F06868', margin: '10px' }}>Log in</Button>
								<Button style={{ backgroundColor: '#F06868', margin: '10px' }} onClick={sign_up}>Sign up</Button>
							</div>
						</div>
					</Route>
					<Route path="/about">
						<div style={{ height: '650px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
							Hello World
						</div>
					</Route>
					<Route path="/logout">
            			Hello
          			</Route>
				</Switch>

			</Router>
		</div>
	);
}

export default App;
