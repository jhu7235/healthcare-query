import React from 'react';
import LogIn from './LogIn';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import AllergyPage from './allergy/AllergyPage';
import AllergyDash from './allergy/AllergyDash';

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		console.log('**INITIATING MAIN');
		return (
			<div>
				<Navbar />
				<AllergyPage />
				<AllergyDash />
				<p>MAIN LOADED</p>
			</div>
		);
	}
}
