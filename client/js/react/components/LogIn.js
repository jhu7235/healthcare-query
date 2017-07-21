import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserTC } from '../../redux/login';

function LogIn (props) {
	console.log('**INITIATING LOG IN');
	return (
		<form onSubmit={props.handleSubmit}>

			<div className="form-group">
        <label>email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
          <label>password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            required
          />
      </div>

      <div>
        <div className="main-action-box">
          <button type="submit" className="btn btn-block btn-primary">LOG IN</button>
        </div>
        <div className="forgot-box">
          <Link to="/signup">
            <button className="btn" >SIGN UP</button>
          </Link>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>

		</form>
	);
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  };
};

const mapFunctionToProps = function (dispatch, ownProps) {
  console.log(ownProps);
  return {
    handleSubmit(event) {
      event.preventDefault();
      const credential = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log('REACT LOGIN', credential);
      dispatch(loginUserTC(credential, ownProps.history));
    }
  };
};

const Container = connect(mapStateToProps, mapFunctionToProps)(LogIn);

export default Container;
