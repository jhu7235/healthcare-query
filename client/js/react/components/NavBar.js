import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';

const Navbar = function (props) {
	console.log('**INITIATING NAVBAR');
	return (
    <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a onClick={props.handleSignOut}>Signout</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="">Sass</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Signout</a></li>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('MAP DISPATCH TO PROPS', ownProps);
  return {
    handleSignOut () {
      let action = {user: {}};
      dispatch(() => ({ type: 'USER_LOG_OUT', action }));
      console.log('SIGIN OUT');
      history.push('./login');
    }
  };
};

const Container = connect(null, mapDispatchToProps)(Navbar);
export default Container;

