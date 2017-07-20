import React from 'react';
// const LogIn = require('./LogIn');
// const SignIn = require('./SignIns');
const {/*Route,*/ HashRouter} = require('react-router-dom');
import NavBar  from './NavBar';
import AllergyPage from './allergy/AllergyPage';
import AllergyDash from './allergy/AllergyDash';

export default class Main extends React.Component {
	constructor () {
		super();
	}

	render() {
	console.log('**INITIATING MAIN',NavBar);
		return (
			<div>
				<NavBar />
				<AllergyPage />
				<AllergyDash />
			</div>
			);
	}
}

				// <NavBar />
				//<HashRouter>
				//	<p>in main</p>
				//</HashRouter>

				// <Route path="/login" component={LogIn} />
				// <Route path="/sign-up" component={SignIn} />
