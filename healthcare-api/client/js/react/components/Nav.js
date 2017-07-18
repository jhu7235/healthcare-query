const React = require('react');
const { Link } = require('react-dom');
const LogIn = require('./LogIn');
const SignUp = require('/SignUp');
const LogOut = require('./LogOut');

export default Nav = function() {
	return (
		<div id="nav">
			<Link /><img src={someLink} />
			<LogIn />
			<SignUp />
			<LogOut />
		</div>
		);
};
