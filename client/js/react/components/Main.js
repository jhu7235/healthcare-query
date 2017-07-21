import React from 'react';
import LogIn from './LogIn';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavBar  from './NavBar';
import SignUp from './SignUp';
import AllergyPage from './allergy/AllergyPage';
import MedicationPage from './medication/MedicationPage';
import ImmunizationPage from './immunization/ImmunizationPage';
import FamilyHistoryPage from './family-history/FamilyHistoryPage';
import ProcedurePage from './procedure/ProcedurePage';
import Dashboard from './Dashboard';

export default function Main () {

	console.log('**INITIATING MAIN');

		return (
			<div>
				<Route path="/patient" component={NavBar} />
				<div className="app-body" >
				<Switch>
					<Route exact path="/patient" component={Dashboard} />
					<Route path="/patient/signup" component={SignUp} />
					<Route path="/patient/allergies" component={AllergyPage} />
					<Route path="/patient/medications" component={MedicationPage} />
					<Route path="/patient/immunizations" component={ImmunizationPage} />
					<Route path="/patient/familyHistory" component={FamilyHistoryPage} />
					<Route path="/patient/procedures" component={ProcedurePage} />
					<Redirect path="/patient" />
				</Switch>
				</div>
			</div>
		);

}
