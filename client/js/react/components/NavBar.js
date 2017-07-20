import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function () {
	console.log('**INITIATING NAVBAR');
	return (
		<div >
			<div className="">
				<Link to="/login">
					<button className="btn" >LOG IN</button>
				</Link>
			</div>
			<div className="">
				<Link to="/signup">
					<button className="btn" >SIGN UP</button>
				</Link>
			</div>
			<div className="">
				<Link to="hi">
					<button className="btn" >LOG OUT</button>
				</Link>
			</div>
		</div>
		);
};

export default NavBar;

