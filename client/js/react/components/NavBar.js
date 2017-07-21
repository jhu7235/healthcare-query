import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function () {
	console.log('**INITIATING NAVBAR');
	return (
    <nav className="nav-extended" style={{backgroundColor: 'rgb(29,179,186)'}}>
        <div className="nav-wrapper">
          <a href="/patient" className="brand-logo"><img src="/logo.png" style={{height: '70px'}}></img></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/patient">Home</a></li>
            <li><a href="/login">Signout</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/patient">Home</a></li>
            <li><a href="/login">Signout</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="/patient/medications">Medications</a></li>
            <li className="tab"><a className="active" href="/patient/allergies">Allergies</a></li>
            <li className="tab"><a href="/patient/immunizations">Immunizations</a></li>
            <li className="tab"><a href="/patient/familyhistory"> Family History</a></li>
            <li className="tab"><a href="/patient/procedures">Procedures</a></li>

          </ul>
        </div>
      </nav>
		);
};

export default NavBar;

