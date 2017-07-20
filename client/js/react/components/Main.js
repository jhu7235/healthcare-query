import React from 'react';
import LogIn from './LogIn';
// const SignIn = require('./SignIns');
import {Switch, Route, Redirect } from 'react-router-dom';
import NavBar  from './NavBar';
import Allergy from './Allergy';
import AllergyDash from './AllergyDash';

export default class Main extends React.Component {
	constructor () {
		super();
	}

	render() {
	console.log('**INITIATING MAIN', NavBar);
		return (
			<div>
				<NavBar />
				<Switch>
					<Route  path="/login" component={LogIn} />
					<Redirect path="home" />
				</Switch>
				{/*<Allergy />*/}
				<AllergyDash />
				<p>MAIN LOADED</p>
			</div>
			);
	}
}
