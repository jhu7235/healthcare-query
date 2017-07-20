import React from 'react';
import LogIn from './LogIn';
import {Switch, Route, Redirect } from 'react-router-dom';
import Navbar  from './Navbar';
import SignUp from './SignUp';
import AllergyPage from './allergy/AllergyPage';
import AllergyDash from './allergy/AllergyDash';
import MedicationPage from './MedicationPage'
import ImmunizationPage from './ImmunizationPage'

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
	console.log('**INITIATING MAIN');
		return (
			<div>
				<Navbar />
				<div className="app-body">
				<Switch>
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Redirect path="/home" />
				</Switch>
				</div>
				<AllergyPage />
				<AllergyDash />
				<MedicationPage />
				<ImmunizationPage />
				<p>MAIN LOADED</p>
			</div>
		);
	}
}
