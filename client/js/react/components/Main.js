import React from 'react';
// const LogIn = require('./LogIn');
// const SignIn = require('./SignIns');
const {/*Route,*/ HashRouter} = require('react-router-dom');
import NavBar  from './NavBar';
import Allergy from './Allergy'
import AllergyDash from './AllergyDash'

export default class Main extends React.Component {
	constructor () {
		super();
	}

	render() {
	console.log('**INITIATING MAIN',NavBar);
		return (
			<div>
				<NavBar />
				<AllergyDash />
				<p>asldkfja</p>
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
