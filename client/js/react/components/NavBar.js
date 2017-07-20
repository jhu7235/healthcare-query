import React from 'react';
import { Link } from 'react-router-dom';


// const SignUp = require('/SignUp');
// const LogOut = require('./LogOut');

const Navbar= function () {
	console.log('**INITIATING NAVBAR');
	return (
    <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Sass</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Signout</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="">Sass</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Signout</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Medications</a></li>
            <li className="tab"><a className="active" href="#test2">Allergies</a></li>
            <li className="tab"><a href="#test3">Conditions</a></li>
            <li className="tab"><a href="#test4"> Family History</a></li>
          </ul>
        </div>
      </nav>
		);
};

export default Navbar;

