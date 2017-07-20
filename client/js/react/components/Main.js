import React from 'react';
import LogIn from './LogIn';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavBar  from './NavBar';
import SignUp from './SignUp';
import AllergyPage from './allergy/AllergyPage';
import AllergyDash from './allergy/AllergyDash';
import MedicationPage from './MedicationPage'
import ImmunizationPage from './ImmunizationPage'
import FamilyHistoryPage from './FamilyHistoryPage'
import ProcedurePage from './ProcedurePage'

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
					<Route path="/patient/signup" component={SignUp} />
					<Route path="/patient/allergies" component={AllergyPage} />
					<Route path="/patient/medications" component={MedicationPage} />
					<Route path="/patient/immunizations" component={ImmunizationPage} />
					<Route path="/patient/familyHistory" component={FamilyHistoryPage} />
					<Route path="/patient/procedures" component={ProcedurePage} />
					<Redirect path="/patient" />
				</Switch>
				</div>
				<p>MAIN LOADED</p>
			</div>
		);
	}
}
