import React from 'react';
import LogIn from './LogIn';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavBar  from './NavBar';
import SignUp from './SignUp';
import AllergyPage from './allergy/AllergyPage';
import AllergyDash from './allergy/AllergyDash';

export default class Main extends React.Component {
	constructor () {
		super();
	}

	render() {
	console.log('**INITIATING MAIN');
		return (
			<div>
				<NavBar />
				<div>
				<Switch>
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Redirect path="/home" />
				</Switch>
				</div>
				<AllergyPage />
				<AllergyDash />
				<p>MAIN LOADED</p>
			</div>
			);
	}
}
