import React from 'react';
import { Link } from 'react-router-dom';


// const SignUp = require('/SignUp');
// const LogOut = require('./LogOut');

const NavBar = function () {
	console.log('**INITIATING NAVBAR');
	return (
		<div >
			<div className="pull-right">
				<Link to="hi">
					<button className="btn" >BUTTON</button>
				</Link>
			</div>
		</div>
		);
};

			// <p>NAVBAR</p>

export default NavBar;
			// <Link /><img src={someLink} />
			// <LogIn />
			// <SignUp />
			// <LogOut />
